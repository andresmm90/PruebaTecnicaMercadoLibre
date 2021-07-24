import {Request,Response} from 'express';
import axios from 'axios';

export class Products{
    public async getProducts(req:Request, res:Response) {
        const response=await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=carro',{
            headers:{
                'Content-Type':'application/json'
            }
        });

         // tslint:disable-next-line:no-console
        console.log({response});

        return res.status(200).send([{
            Nombre:'Carro',
            following: 1,
            followed: false
        }]);
    }
}