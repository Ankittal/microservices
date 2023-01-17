import StatusCodes from "http-status-codes";
import CustomerModel from "./customerModel.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export async function signUp(req,res){
    try {
        req.body['password'] = bcrypt.hashSync(req.body.password, 12);
        const customer = new CustomerModel(req.body);
        const savedCustomer = await customer.save();
        res.status(StatusCodes.CREATED).json(savedCustomer);
        
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal sserver error"})
    }
} 

export async function login(req,res){
    let  email = req.body.email;
    let password = req.body.password;
    try {
    const customer  = CustomerModel.find({email: email,password: password});
    if(customer){
        res.status(StatusCodes.OK).json(customer);
    }
    else{
        res.status(StatusCodes.NOT_FOUND).json({message:"customer not found"})
    }
} 
catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})
}
}

export async function getAllCustomers(req,res){
    try {
        const customers = await CustomerModel.find();
        customers? res.status(StatusCodes.OK).json(customers):res.status(StatusCodes.BAD_REQUEST).json({message:"customers not found"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})  
    }
}


export async function getCustomerById(req,res){
    try {
        const customer = await CustomerModel.findById(req.params.id);
        customer? res.status(StatusCodes.OK).json(customer):res.status(StatusCodes.NOT_FOUND).json({message:"customer not found"})
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})  
    }
}
export async function updateCustomer(req,res){
try {
    const customer = await CustomerModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(StatusCodes.OK).json(customer);
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})  
}
}
export async function deleteCustomer(req,res){
try {
    const customer = await CustomerModel.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.NO_CONTENT).json({message:"NO Content"});
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})  
}
}