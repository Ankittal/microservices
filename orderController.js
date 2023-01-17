import { StatusCodes } from "http-status-codes";
import OrderModel from "./orderModel.js";
import axios from "axios";
export async function saveOrder(req, res) {
    try {

        const order = new OrderModel(req.body);
        const savedOrder = await order.save();
        res.status(StatusCodes.CREATED).json(savedOrder);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "internal server error" });
    }
}

export async function getAllOrders(req, res) {
    try {
        const orders = await OrderModel.find();
        res.status(StatusCodes.OK).json(orders);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "internal server error" });
    }
}


export async function deleteOrder(req, res) {
    try {
        await OrderModel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.OK).json({ message: "Order deleted" });


    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "internal server error" });
    }

}


export async function getOrderById(req, res) {
    try {
        const order = await OrderModel.findById(req.params.id);
        // res.status(StatusCodes.OK).json(order);
        if (order) {
            axios.get(`http://localhost:4500/${order.customerID}`).then((response) => {
              let orderObject = { CustomerDetails: response.data, BookDetails: '' }
              
        
              axios.get(`http://localhost:8000/${order.bookID}`).then((response) => {
                orderObject.BookDetails = response.data
                res.json(orderObject);
              })
            })
      
          } else {
            res.status(404).send('Orders not found');
          }

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "internal server error" });
    }
}
