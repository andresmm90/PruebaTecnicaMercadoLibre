import express from 'express';
import {Server} from './server';
import { get } from 'config';

const app=express();
new Server().config(app);
app.listen (get("Server.port"), ()=> {
  // tslint:disable-next-line:no-console
    console.log ('Mercado Libre API stared =>');
  });
