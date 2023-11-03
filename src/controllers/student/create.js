import { pool } from "../../lib/postgres.js";

export const create = async (req, res) => {
  try {
    const {
      nome,
      idade,
      notaDoPrimeiroSemestre,
      notaDoSegundoSemestre,
      nomeDoProfessor,
      numeroDaSala,
    } = req.body;

    const student = await pool.query(
      "INSERT INTO students(nome, idade, nota_do_primeiro_semestre, nota_do_segundo_semestre, nome_do_professor, numero_da_sala) VALUES($1, $2, $3, $4, $5, $6) returning*",
      [
        nome,
        idade,
        notaDoPrimeiroSemestre,
        notaDoSegundoSemestre,
        nomeDoProfessor,
        numeroDaSala,
      ]
    );

    return res.status(201).json(student.rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};
