import  Express  from "express";
import { getAllBooks, getBookById, saveBook, updateBook } from "./bookController.js";

const bookRouter= Express.Router();


bookRouter.post("/",saveBook);
bookRouter.get("/",getAllBooks);
bookRouter.get("/:id",getBookById);
bookRouter.put("/:id",updateBook);

export default bookRouter;