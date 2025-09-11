import React from "react";

const Header = ({ usuario, onSearch, onQuickAdd }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl mb-6">
      <div className="flex items-center space-x-2">
        <img src={usuario.avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full" />
        <span className="font-semibold">{usuario.nome}</span>
      </div>

      <input
        type="search"
        placeholder="Buscar tarefas..."
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        onChange={e => onSearch(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        onClick={onQuickAdd}
      >
        + Nova
      </button>
    </header>
  );
};

export default Header;
