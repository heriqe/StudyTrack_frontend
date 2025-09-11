import React, { useState } from "react";
import Header from "../components/Header";
import ListaTarefas from "../components/ListaTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Prova de Matemática", prazo: "2025-09-15", tipo: "Prova", cor: "#EF4444" },
    { id: 2, titulo: "Trabalho de História", prazo: "2025-09-20", tipo: "Trabalho", cor: "#F59E0B" },
    { id: 3, titulo: "Leitura de Português", prazo: "2025-09-25", tipo: "Leitura", cor: "#10B981" },
  ]);

  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const tarefasFiltradas = tarefas.filter(t =>
    (filtro === "Todos" || t.tipo === filtro) &&
    t.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-6">
      <Header
        usuario={{ nome: "Henrique", avatarUrl: "https://i.pravatar.cc/40" }}
        onSearch={setBusca}
        onQuickAdd={() => (window.location.href = "/nova")}
      />

      <div className="mb-4">
        <select
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="Todos">Todos</option>
          <option value="Prova">Provas</option>
          <option value="Trabalho">Trabalhos</option>
          <option value="Leitura">Leituras</option>
          <option value="Revisão">Revisões</option>
        </select>
      </div>

      <ListaTarefas tarefas={tarefasFiltradas} />
    </div>
  );
}
