import express from "express";
import {placeOrder,placeOrderStripe,allOrders,userOrders,upadateStatus, verifyStripe} from '../controllers/orderControllers.js'
import adminAuth from '../middleware/adminAuth.js'
import { updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";
const orderRouter=express.Router()
//all orders for admin panel admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,upadateStatus)
  
//for payment features
orderRouter.post('/place',authUser,placeOrder)//cod
orderRouter.post('/stripe',authUser,placeOrderStripe)
//user feature
orderRouter.post('/userorders',authUser,userOrders)
//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter

