import Price from "./Price";

export default interface Product {
    id:string;
    title:string;
    price:Price;
    picture:string;
    condition:string;
    free_shipping:boolean;
    category_id:string;
    sold_quantity?:number;
    description?:string;
}