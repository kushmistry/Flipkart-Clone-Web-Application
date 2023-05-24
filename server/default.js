import { products } from "./constants/data.js";
import product from "./model/product_schema.js";

const DefaultData = async() => {
    try {
        await product.insertMany(products);
        console.log("products inserted sucessfully...");
    } catch (error) {
        console.log(`Error while inserting default data: ${error.message}`)
    }
}

export default DefaultData;