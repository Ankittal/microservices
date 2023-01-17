import  Express  from "express";
import { deleteCustomer, getAllCustomers, getCustomerById, signUp, updateCustomer } from "./customerController.js";

const customerRouter = Express.Router();

customerRouter.post("/",signUp);
customerRouter.get("/",getAllCustomers);
customerRouter.get("/:id",getCustomerById);
customerRouter.put("/:id",updateCustomer);
customerRouter.delete("/:id",deleteCustomer);

export default customerRouter;