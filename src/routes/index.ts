import { Router } from "express";
import { create } from "../controllers/student/create";
import { studentSchema } from "../schemas/student";
import { validateBodyRequest } from "../middlewares/validateBodyRequest";
import { deleteStudent } from "../controllers/student/delete";
import { update } from "../controllers/student/update";
import { getAll } from "../controllers/student/getAll";
import { getById } from "../controllers/student/getById";

export const router = Router();

router.get;
router.post("/alunos", [validateBodyRequest(studentSchema)], create);
router.delete("/alunos/:id", deleteStudent);
router.put("/alunos/:id", [validateBodyRequest(studentSchema)], update);
router.get("/alunos", getAll);
router.get("/alunos/:id", getById);
