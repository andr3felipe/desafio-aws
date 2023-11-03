import { z } from "zod";

export const validateBodyRequest = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((err) => err.message);

      return res.status(400).json({ mensagem: errorMessage });
    }

    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }

  next();
};
