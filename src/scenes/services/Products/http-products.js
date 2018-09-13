import { API_BASE, HTTP_PRODUCT } from './../config';
import httpBase from './../http-base';

class HttpProduct {
    async getProducts() {
        try {
            const url = `${API_BASE}${HTTP_PRODUCT.getProductos}`
            //console.log(url);
            const data = await httpBase.baseGet(url, {})
            return data;
        } catch (error) {
            console.log(error);
        }

    }
    async  getProductsById(ID) {
        try {
            const url = `${API_BASE}${HTTP_PRODUCT.getProducto}${ID}`;
            console.log("ANANANANNA--->"+url);
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpProduct;





