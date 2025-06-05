import { useSection } from "../../SectionContext.jsx";
import { useEffect, useState } from "react";
import { content } from "../../content.js";

import Serie from "../2-catalog/Serie.jsx";

export default function Search() {
  const {
    sectionIndex,
    setSectionIndex,
    serieIndex,
    setSerieIndex,
    menuOn,
    setMenuOn,
    modalOn,
    setModalOn,
    epIndex,
    setEpIndex,
  } = useSection();

  const [searchTerm, setSearchTerm] = useState("");

  // Filtra as séries com base no input
  const filteredContent = content
    .map((serie, index) => ({ ...serie, originalIndex: index }))
    .filter((serie) => {
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();
      return (
        serie.title?.toLowerCase().includes(term) ||
        serie.tags?.some((tag) => tag.toLowerCase().includes(term))
      );
    })
    .sort((a, b) => (a.title || "").localeCompare(b.title || ""));

  if (sectionIndex === 2) {
    return (
      <section className="flex flex-col gap-4 h-full p-4 bg-zinc-900">
        {/* Barra superior com botão voltar e input de busca */}
        <div className="flex items-center gap-4 w-full p-2 border-b border-zinc-700">
          {/* Botão voltar */}
          <button
            onClick={() => setSectionIndex(0)}
            className="hover:opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#3f3f46"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>

          {/* Input de busca */}
          <input
            className="w-full p-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 placeholder-zinc-500
        hover:border-zinc-500 hover:text-zinc-200 focus:outline-none focus:border-zinc-500
        transition duration-300 shadow-sm hover:shadow-md"
            type="text"
            placeholder="Digite aqui o nome da série ou gênero que procura!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid de séries */}
        <div className="flex justify-center flex-wrap gap-5 overflow-y-auto">
          {filteredContent.map((serie) => (
            <Serie
              key={serie.access}
              data={serie}
              index={serie.originalIndex}
            />
          ))}
        </div>
      </section>
    );
  }
}
