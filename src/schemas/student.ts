import { z } from "zod";

export const studentSchema = z.object({
  nome: z.string({ required_error: "O nome é obrigatório." }),
  idade: z.number({ required_error: "A idade é obrigatória." }),
  notaDoPrimeiroSemestre: z.number({
    required_error: "A nota do primeiro semestre é obrigatório.",
  }),
  notaDoSegundoSemestre: z.number({
    required_error: "A nota do segundo semestre é obrigatório.",
  }),
  nomeDoProfessor: z.string({
    required_error: "O nome do professor é obrigatório.",
  }),
  numeroDaSala: z.string({ required_error: "O número da sala é obrigatório." }),
});
