import {Request,Response,Router} from 'express';
import {searchProducts,getProduct} from '../controllers/products.controller';

export class ProductsRoute{
    public static create(router:Router){
        router.get('/items', (req:Request, res:Response)=>{
            searchProducts(req,res);
        });

        router.get('/items/:id', (req:Request, res:Response)=>{
            getProduct(req,res);
        });
    }
}