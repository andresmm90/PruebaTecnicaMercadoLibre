import IPrice from "./Price";

export default interface IProduct {
    id:string;
    title:string;
    price:IPrice;
    picture:string;
    condition:string;
    free_shipping:boolean;
    sold_quantity?:number;
    description?:string;
}