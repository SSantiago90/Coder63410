import products from "./data"

function getAsyncData() {
  console.log("Solicitando datos")
  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = true;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")

      console.log("Promesa Terminada")
      resolve(products)
    }, 2000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}

export default getAsyncData;
// React
/* getAsyncData()
  .then( (respuesta) => { console.log(respuesta)})
  .catch( (error) => { console.log(error)}) //handling

console.log("Sigo trabajndo")  */