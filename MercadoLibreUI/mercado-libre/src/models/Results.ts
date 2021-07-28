import IAuthor from "./Author";
import IProduct from "./Product";

export default interface IResults {
    author:IAuthor;
    categories:string[];
    items:IProduct[];
}