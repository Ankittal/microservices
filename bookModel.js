import mongoose from "mongoose";
const bookSchema =new mongoose.Schema({
    title: {
      type: String,
      require: true
    },
    author: {
      type: String,
      require: true
    },
    pages: {
      type: String,
    },
    publisher: {
      type: String,
    },
    language : {
      type: String
    },
    
    rate:{
      type: Number,
      
    }
  })
  
  const BookModel = mongoose.model("book", bookSchema);
  
  export default BookModel;