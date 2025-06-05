import { useSection } from "../../SectionContext.jsx";
import { useEffect, useState } from "react";
import { content } from "../../content.js";

import ButtonMenu from "./buttonMenu/ButtonMenu.jsx";

export default function Menu() {
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

  if (menuOn === true) {
    return (
      <nav className="fixed top-0 right-0 flex flex-col gap-4 w-56 h-screen bg-zinc-900 text-white p-4 shadow-2xl z-20">
        {/* Botão Fechar */}
        <button
          onClick={() => setMenuOn(false)}
          className="ml-auto p-2 hover:bg-zinc-800 rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#F3F3F3"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>

        {/* Menu de opções */}
        <div className="flex flex-col gap-3 mt-4">
          <ButtonMenu title="Pesquisar" open={2} />
          <ButtonMenu title="Minha Lista" open={3} />
        </div>
      </nav>
    );
  }
}
