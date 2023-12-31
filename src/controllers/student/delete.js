import { pool } from "../../lib/postgres.js";

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query(
      "DELETE FROM students WHERE id = $1 returning *",
      [id]
    );

    if (rows.length > 0) {
      return res.status(204).json();
    }

    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};
