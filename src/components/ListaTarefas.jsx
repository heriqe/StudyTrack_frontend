import React from 'react';
import CardTarefa from './CardTarefa';

const ListaTarefas = ({ tarefas }) => {
  return (
    <div className="lista-tarefas">
      {tarefas.map(t => (
        <CardTarefa
          key={t.id}
          titulo={t.titulo}
          prazo={t.prazo}
          cor={t.cor}
          descricao={t.descricao}
        />
      ))}
    </div>
  );
};

export default ListaTarefas;
