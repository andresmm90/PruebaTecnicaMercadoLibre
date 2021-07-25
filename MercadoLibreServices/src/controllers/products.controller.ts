import {Request,Response} from 'express';
import {getProductsIterator,getDetailIterator} from '../core/interactors';

export const searchProducts=async (req:Request,res:Response)=>{
    const {q} = req.query;
    const results=await getProductsIterator(q?q.toString():null);
    res.json(results);
}

export const getProduct=async (req:Request,res:Response)=>{
    const {id} = req.params;
    const results=await getDetailIterator(id?id.toString():null);
    res.json(results);
}