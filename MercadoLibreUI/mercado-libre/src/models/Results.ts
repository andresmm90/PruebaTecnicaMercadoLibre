import Author from "./Author";
import Product from "./Product";

export default interface Results {
    author:Author;
    categories:string[];
    items:Product[];
}