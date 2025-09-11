import React from "react";

const CardTarefa = ({ titulo, prazo, cor, descricao }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-2 bg-white rounded-xl shadow-md border-l-4" style={{ borderColor: cor }}>
      <div>
        <h3 className="text-lg font-semibold">{titulo}</h3>
        {descricao && <p className="text-sm text-gray-600">{descricao}</p>}
      </div>
      <span className="px-3 py-1 text-sm font-bold rounded-lg" style={{ color: cor }}>
        {prazo}
      </span>
    </div>
  );
};

export default CardTarefa;
