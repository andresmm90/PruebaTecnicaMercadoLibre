import ProductService from "../../dataSources/productsService.datasource"
import { getProducts, getDetails } from "./products.interactor";

const productsRepository=new ProductService();

export const getProductsIterator= getProducts(productsRepository);

export const getDetailIterator= getDetails(productsRepository);