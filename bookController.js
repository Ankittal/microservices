import StatusCodes from "http-status-codes";
import BookModel from "./bookModel.js";

export async function saveBook(req,res){
    try{
        const book = new  BookModel(req.body);
        const savedBook = await book.save();
        res.status(StatusCodes.CREATED).json(savedBook);
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"})
    
}
}
export async function getAllBooks(req, res){
    try{
        const books = await BookModel.find();
       books? res.status(StatusCodes.OK).json(books):res.status(StatusCodes.BAD_REQUEST).json({message: 'Book not found'})
    }catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal server error"});
}
}
export async function getBookById(req, res){
try {
    const book= await BookModel.findById(req.params.id);
   book? res.status(StatusCodes.OK).json(book):res.status(StatusCodes.NOT_FOUND).json({message:"book not found"});
}
catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal sserver error"})
    
}
}

export async function updateBook(req,res){
try {
    const book = await BookModel.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    book? res.status(StatusCodes.OK).json(book):res.status(StatusCodes.BAD_REQUEST).json({message:"book not found"});
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal sserver error"}) 
}
}

export async function deleteBook(req,res){
try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    book? res.status(StatusCodes.NO_CONTENT).json({message:"NO CONTENT"}):res.status(StatusCodes.BAD_REQUEST).json({message:"Book not found"})
} catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"internal sserver error"}) 
}
}