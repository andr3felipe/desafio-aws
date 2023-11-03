import { Request, Response } from "express";
import { pool } from "../../lib/postgres";

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      nome,
      idade,
      notaDoPrimeiroSemestre,
      notaDoSegundoSemestre,
      nomeDoProfessor,
      numeroDaSala,
    } = req.body;

    const student = await pool.query(
      "UPDATE students SET nome = $1, idade = $2, nota_do_primeiro_semestre = $3, nota_do_segundo_semestre = $4, nome_do_professor = $5, numero_da_sala = $6 WHERE id = $7 returning *",
      [
        nome,
        idade,
        notaDoPrimeiroSemestre,
        notaDoSegundoSemestre,
        nomeDoProfessor,
        numeroDaSala,
        id,
      ]
    );

    if (student.rowCount < 1) {
      return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }

    return res.status(200).json(student.rows[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
