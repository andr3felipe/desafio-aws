import { Request, Response } from "express";
import { pool } from "../../lib/postgres";

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM students WHERE id = $1", [
      id,
    ]);

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};
