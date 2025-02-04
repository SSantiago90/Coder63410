import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch, documentId} from "firebase/firestore";
import products from "./data"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  appId: import.meta.env.VITE_FIRESTORE_APPID,
  authDomain: "react-ecommerce-f00e3.firebaseapp.com",
  projectId: "react-ecommerce-f00e3",
  storageBucket: "react-ecommerce-f00e3.firebasestorage.app",
  messagingSenderId: "138011420911",
};

// 1. Conexión con Firebase
const app = initializeApp(firebaseConfig);

// 2. Conexión con la base de datos de Firestore
const db = getFirestore(app);

export default async function getAsyncData() { 
  // leer todos los documentos de la colección "products"
  const collectionRef = collection(db, "products"); // referencia de coleccion
  const productsSnapshot = await getDocs(collectionRef) // snapshot de datos
  // snapshot -> docs
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    /*  { ...doc.data(), id: doc.id} */
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  

  return documentsData; // resolve(documentsData)
 }


export async function getAsyncItemById(itemID) { 
  const docRef = doc(db, "products",itemID )
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  // docData.id = docSnapshot.id;
  return docData;
 }

export async function getAsyncItemsByCategory(catID) {
  const productsColRef = collection(db, "products");
  const q = query(productsColRef, where("category", "==", catID))

  const productsSnapshot = await getDocs(q) // snapshot de datos
  // snapshot -> docs
  console.log(productsSnapshot)

  const documentsData = productsSnapshot.docs.map( doc => { 
    /*  { ...doc.data(), id: doc.id} */
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
    }
  )  

  return documentsData; // resolve(documentsData)

 }



 // Solo para testing
 export async function createDocument(){
  // Add a new document with a generated id.  
 /*  const docRef = await addDoc(collection(db, "products"), {
    title: 'Calcetines Navideños',
    price: 10,
    stock: 100,
    img: `https://picsum.photos/seed/5/240/180`,
    category: 'regalos'
  },); 
  console.log("Document written with ID: ", docRef.id);
  */

  const newProductRef = doc(db, "products", "nuevo-id")
  /* await setDoc(doc(db, "cities", "new-city-id"), data); */
  // setDoc() no devuelve ningun valor
  await setDoc(newProductRef,{
    title: 'Calcetines Navideños',
    price: 10,
    stock: 100,
    img: `https://picsum.photos/seed/5/240/180`,
    category: 'regalos'
  } )

  console.log("Nuevo documento creado")
 }

 export async function exportProductsToDB(){
    //for... of
    // products.forEach( item => {} )
    // 15 productos -> 15 writes en firestore
    for(let item of products){    
        delete item.id;
        const docID = await addDoc( collection(db, "products"), item)
        console.log("Creado documento", docID.id)
    }
 }

export async function exportProductsWithBatch(){
  const batch = writeBatch(db)

  products.forEach( item => {
    const itemid = `${item.id}`;
    delete item.id
    const newDoc = doc(db, "products", `item-${itemid}`);
    batch.set(newDoc, item)
  });

  const commitRes = await batch.commit()
  console.log("Commit de products completo", commitRes)
}

export async function createBuyOrder(orderData){
  console.log(orderData);
  const newOrderDoc = 
    await addDoc(collection(db, "orders"), orderData); 

  return newOrderDoc.id
}

// TODO : SIN TESTEAR
export async function createBuyOrderWithStockUpdate(order){
  // Necesitamos acceder a los documentos de las colecciones "orders" como también "products"
  const orderRef = collection(db, "order");
  const productsRef = collection(db, "products");

  //* 1. Creamos un nuevo lote de escritura ("writeBatch")
  const batch = writeBatch(db);

  //* 2. Actualizar cada item según la compra del usuario ("stock" menos "count")

  //* 2-A hago un listado de los items a actualizar
  const arrayIds = order.items.map((item) => item.id);
  

  //* 2-B obtengo de Firestore los datos de los productos a actualizar utilizando una query  
  // la "query" filtra los productos donde: el id del documento (documentId()) esté incluido (in) el array creado (arrayIds)
  // "documentId()" es un helper de la librería de firestore que permite especificar el "id" de los documentos en una query
  // "in" es un operador de comparación que sirve para buscar un campo dentro de un array de posibles valores
  const q = query(productsRef, where(documentId(), "in", arrayIds));
  const querySnaphot = await getDocs(q);
  const docsToUpdate = querySnaphot.docs;

  // creamos un array donde almacenar todos los productos que no tengan stock
  let itemsSinStock = [];

  //* . Por cada documento que se necesite actualizar, comprobamos si hay stock suficiente para la compra
  docsToUpdate.forEach((doc) => {
    //* 3.A Obtengo el stock guardado según la base de datos
    let { stock } = doc.data();

    //* 3.B Encontramos el item "iterado" en el carrito de compras que creó el usuario
    let itemInCart = order.items.find((item) => item.id === doc.id);
    let countInCart = itemInCart.count;

    //* 3.C Calculamos la cantidad resultante si se efectuara la compra
    let newStock = stock - countInCart;

    //* 4. Validamos ->  ¿Hay stock suficiente?         
    if (newStock < 0) {
      // si es así, sumamos el item al array de "items sin stock"
      itemsSinStock.push(doc.id);
    }
     else {
          // sino, agregamos una operación de "update" al "batch" de escritura
          // en batch.update modificamos en el documento el valor de "stock" de dicho item
          batch.update(doc.ref, { stock: newStock });
      }
  });
  
  //* 5. Si "items sin stock" tiene al menos una entrada -> generamos un error, deteniendo la ejecución del script

  // creamos un string mostrando todos los "titles" de los items sin unidades disponibles
  const itemsSinStockString = itemsSinStock.map( item => item.title ).join(", ");
  
  if (itemsSinStock.length >= 1){
    throw new Error(`Stock no disponible para los productos ${itemsSinStockString}`);    
  }
  // LLegado este punto, podemos estar seguros que todos los productos cuentan con stock suficiente
  else {
    //* 6.  hacemos el "commit" del batch  actualizando todos los documentos y creamos la orden de compra
    await batch.commit();

    //* 7. Generamos la orden de compra    
    let newOrder = await addDoc(orderRef, order);
    return newOrder.id;
 }
}

export async function updateStock(){

}