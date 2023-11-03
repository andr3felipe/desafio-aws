import { Router } from "express";
import { create } from "../controllers/student/create.js";
import { studentSchema } from "../schemas/student.js";
import { validateBodyRequest } from "../middlewares/validateBodyRequest.js";
import { deleteStudent } from "../controllers/student/delete.js";
import { update } from "../controllers/student/update.js";
import { getAll } from "../controllers/student/getAll.js";
import { getById } from "../controllers/student/getById.js";

export const router = Router();

router.get;
router.post("/alunos", [validateBodyRequest(studentSchema)], create);
router.delete("/alunos/:id", deleteStudent);
router.put("/alunos/:id", [validateBodyRequest(studentSchema)], update);
router.get("/alunos", getAll);
router.get("/alunos/:id", getById);
