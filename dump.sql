DROP TABLE IF EXISTS students CASCADE;

CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255),
	idade INT,
	nota_do_primeiro_semestre INT,
	nota_do_segundo_semestre INT,
	nome_do_professor VARCHAR(255),
	numero_da_sala VARCHAR(10)
);