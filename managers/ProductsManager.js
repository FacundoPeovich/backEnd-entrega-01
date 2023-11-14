import fs from "fs"; //se usa import para manejo de archivo asincrono
//import {Blob} from `buffer`;        //Se utiliza para saber el tamaño de un archivo

export default class ProducstManager {
  constructor(path) {
    this.path = path;
    //this.products = [];
  }

  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      try {
        const products = JSON.parse(data);
        return products;
      } catch {
        console.log("Error en lectura de archivos!!");
      }
    } else {
      return [];
    }
  };

  addProduct = async (producto) => {
    const products = await this.getProducts();
    try {
      producto = {
        ...producto,
        id: this.generarIdUnico(),
      };
      products.push(producto);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(products, null, "\t")
      );
      try {
        return products;
      } catch {
        console.log("Error en lectura de archivos!!");
      }
    } catch {
      console.log("Error en lectura de archivos!!");
    }
  };

  generarIdUnico() {
    const parteAleatoria = Math.random().toString(36).substring(2, 11); // Genera una cadena aleatoria de 9 caracteres
    const marcaDeTiempo = Date.now().toString(36); // Convierte la marca de tiempo a una cadena hexadecimal
    const idUnico = parteAleatoria + marcaDeTiempo; // Combina la parte aleatoria con la marca de tiempo
    return idUnico;
  }

  getProductById = async (id) => {
    const products = await this.getProducts();
    try {
      //console.log(products);
      let producto = products.find((producto) => {
        if (producto.id === id) {
          return producto;
        } else {
          return null;
        }
      });

      if (!producto) {
        console.log("Not found!");
      }
      return producto;
    } catch {
      console.log("Error en lectura de archivos!!");
    }
  };

  updateProduct = async (id, producto) => {
    const products = await this.getProducts();
    try {
      let index = products.findIndex((produc) => produc.id === id);
      if (index >= 0) {
        products[index] = producto;
        products[index].id = id; //Para asegurarse que sigue el mismo id. de producto
        await fs.promises.writeFile(this.path,JSON.stringify(products, null, "\t"));
        try {
            return products;
        } catch {console.log("Error en lectura de archivos!!")}
      } else {
        console.log("Update fallido. Id. de producto no hallado!!");
      }
    } catch {console.log("Error en lectura de archivos!!")}
    //
  };

  deleteProduct = async (id) => {
    const products = await this.getProducts();
    try {
           let index = products.findIndex((producto) => producto.id === id);

    if (index >= 0) {
      products.splice(index, 1);
      await fs.promises.writeFile(this.path,JSON.stringify(products, null, "\t"));
      try {
        return products;
      } catch { console.log("Error en lectura de archivos!!")}
      
    } else {
      console.log("Delete fallido. Id. de producto no hallado!!");
      return null;
    }
 
    } catch {console.log("Error en lectura de archivos!!")}
  };

}
