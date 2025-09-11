import React, { useState } from 'react';
import './FormNovaTarefa.css';

const FormNovaTarefa = ({ onSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [tipo, setTipo] = useState('');
  const [prazo, setPrazo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ titulo, disciplina, tipo, prazo, descricao });
    // resetar campos se necessário
  };

  return (
    <form className="form-nova-tarefa" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Disciplina"
        value={disciplina}
        onChange={e => setDisciplina(e.target.value)}
        required
      />
      <select
        value={tipo}
        onChange={e => setTipo(e.target.value)}
        required
      >
        <option value="">Tipo de Atividade</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Prova">Prova</option>
        <option value="Leitura">Leitura</option>
        <option value="Revisão">Revisão</option>
      </select>
      <input
        type="date"
        value={prazo}
        onChange={e => setPrazo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição (opcional)"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default FormNovaTarefa;
