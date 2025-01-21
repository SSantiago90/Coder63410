import products from "./data"

function getAsyncData() { 
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")
      resolve(products)
    }, 500)     
  })

  return promiseData;
}

export function getAsyncItemById(itemID) {  
  const promiseData = new Promise( (resolve) => {    

    setTimeout( () => {      
      const requestedProduct = products.find( (item) => item.id === Number(itemID))
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct)
    }, 500)     
  })

  return promiseData;
}


export function getAsyncItemsByCategory(catID) {
  
  const promiseData = new Promise( (resolve) => {    

    setTimeout( () => {      
      const requestedProduct = products.filter( (item) => item.category.toLowerCase() === catID.toLowerCase())
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct)
    }, 500)     
  })


  return promiseData;
}

export default getAsyncData;