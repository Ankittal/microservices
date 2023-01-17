import  Express  from "express";
import { deleteOrder, getAllOrders, getOrderById, saveOrder } from "./orderController.js";

const OrderRouter = Express.Router();
OrderRouter.post("/",saveOrder);
OrderRouter.get("/",getAllOrders);
OrderRouter.get("/:id",getOrderById);
OrderRouter.delete("/:id",deleteOrder);

export default OrderRouter;