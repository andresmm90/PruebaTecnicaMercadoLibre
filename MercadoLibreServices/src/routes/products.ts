import {Request,Response,Router} from 'express';
import {Products} from '../controllers/products';

export class ProductsRoute{
    public static create(router:Router){
    router.get('/products', (req:Request, res:Response)=>{
           new Products().getProducts(req,res);
        });
    }
}