import products from "./data"

function getAsyncData() {
  console.log("Solicitando datos")  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      console.log("Promesa Terminada")
      resolve(products)
    }, 2000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}

export function getAsyncItemById(requestID) {
  console.log("Solicitando datos para ID", requestID)  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      console.log("Promesa Terminada")
      resolve(products.find(item => item.id === requestID))      
    }, 2000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}
  

export default getAsyncData;