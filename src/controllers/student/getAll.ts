import { Request, Response } from "express";
import { pool } from "../../lib/postgres";

export const getAll = async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT * FROM students");

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};
