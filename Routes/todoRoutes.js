import { addTodo,getTodo,updateTodo,deleteTodo} from "../Controller/todoController.js";

import express from "express";
const router = express.Router();

router.post("/addtodo",addTodo);
router.get("/gettodo",getTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);

export default router;