import mongoose from "mongoose";


const orderSchema =new mongoose.Schema({
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      require: true
    },
    bookID: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"book",
      require: true
    },
    initialDate: {
      type: Date,
      default: Date.now()
    },
    deliveryDate: {
      type: Date,
      require: false
    }
  })
  
  const OrderModel = mongoose.model("order", orderSchema);
  export default OrderModel;