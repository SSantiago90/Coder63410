import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch} from "firebase/firestore";
import products from "./data"

const firebaseConfig = {
  apiKey: "AIzaSyCQ4S4zWHKrQOUzh_NacReHRF4uI_fZ8pA",
  authDomain: "react-ecommerce-f00e3.firebaseapp.com",
  projectId: "react-ecommerce-f00e3",
  storageBucket: "react-ecommerce-f00e3.firebasestorage.app",
  messagingSenderId: "138011420911",
  appId: "1:138011420911:web:1a41b721ec94ac8884931a"
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

export async function createBuyOrderWithStockUpdate(){
    // Crear orden de compra
    // update del stock (
        // busquemos cada doc -> orderData.items
        // cada documento update(doc, { stock: })
}


export async function updateStock(){

}