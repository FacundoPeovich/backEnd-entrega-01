import ProducstManager from "./managers/ProductsManager.js";

const path = "./files/products.json";
const managerProduct = new ProducstManager(path);

const env = async () => {
//************* ATENCION!! PARA PRUEBAS ********/
// Descomentar/Comentar cada bloque del metodo que se desea probar
//**********************************************/

//**PRIMERA CONSULTA */
    // let primerConsulta = await managerProduct.getProducts();
    // console.log(primerConsulta)
//**FIN PRIMERA CONSULTA */


//****** PRUEBA DE addProduct*/
    // let productoAgregar = {
    //     title : "Artic1",
    //     descripcion : "Tomate al natural",
    //     thumbail : "/imagenes.artic1",
    //     code : 1,
    //     stock : "1"
    // }
    // let result = await managerProduct.addProduct(productoAgregar);
    // productoAgregar = {
    //     title : "Artic2",
    //     descripcion : "Arroz Mocovi",
    //     thumbail : "/imagenes.artic2",
    //     code : 2,
    //     stock : "5"
    // }
    // result = await managerProduct.addProduct(productoAgregar);

    // console.log(result);

//**FIN prueba addProduc */

// *** PRUEBA DE getProductById *********
 
    // const productobyId = await managerProduct.getProductById("ff55v02ndloysgli8");     //Copiar un id del archivo products.json para probar
    // console.log("Prueba de busqueda x Id.")
    // console.log(productobyId);

//***FIN PRUEBA getProductById  */


// //*** PRUEBA DE deleteProduct */
    // let result = await managerProduct.deleteProduct("ff55v02ndloysgli8");      //el parametro es el id. de un producto que exista en el archivo products.json
    // console.log(result);
//*** FIN DELETEPRODUCT */

//*** PRUEBA DE updateProduct */
    // const idProdcutUpdate = "e1hoccncxloysgli9";     //el parametro es el id. de un producto que exista en el archivo products.json
    // let productoUpdate = await managerProduct.getProductById(idProdcutUpdate);
    // //productoUpdate.descripcion = "Arroz Mocovi x 1 kgs."
    // productoUpdate = {
    //     ...productoUpdate,
    //     descripcion: "Arroz Mocovi x 1 kgs."
    // }
    // //console.log(productoUpdate);
    // let result = await managerProduct.updateProduct(idProdcutUpdate, productoUpdate);      //el parametro es el id. de un producto que exista en el archivo products.json
    // console.log(result);
//***FIN UPDATEPRODUCT */

}

env()
