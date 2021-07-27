import express from 'express';
import {ProductsRoute} from '../routes/products';
import cors from 'cors';

export class Server{
    private prefixApi='/api';

    public config(app:any){;
        this.configRoutes(app);
        app.use(cors())
    }

    private configRoutes(app:any) {
        const router:express.Router=express.Router();
        ProductsRoute.create(router);
        app.use(this.prefixApi,router);
    }
}