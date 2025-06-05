import { useSection } from "../../SectionContext.jsx";
import { useEffect, useState } from "react";
import Header from "../1-home/Header.jsx";
import { content } from "../../content.js";

export default function List() {
  const {
    sectionIndex,
    setSectionIndex,
    serieIndex,
    modalOn,
    setModalOn,
    setSerieIndex,
    epIndex,
    setEpIndex,
    addToWatchList,
    removeToWatchList,
    listIndex,
    setListIndex,
  } = useSection();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const list = userData?.watchList || []; // Pega diretamente o array de índices ou vazio
    setListIndex(list); // Atualiza o estado com esses índices
  }, []); // Executa apenas na montagem do componente

  if (sectionIndex === 3) {
    return (
      <section className="min-h-screen flex flex-col bg-zinc-900 text-white">
        <div className="flex items-center gap-2 p-6 border-b border-zinc-800">
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

          <h2 className="text-2xl font-semibold">Minha Lista</h2>
        </div>

        <div className="flex flex-col gap-6 p-4">
          {listIndex.map((e, i) => (
            <article
              key={i}
              className="flex flex-col sm:flex-row gap-4 bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Imagem */}
              <img
                className="w-full w- sm:w-60 h-40 sm:h-auto object-cover"
                src={`../img/${content[e].access}/banner.jpg`}
                alt={`${content[e].title} banner.`}
              />

              {/* Conteúdo */}
              <div className="flex flex-col justify-center gap-3 p-4 flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {content[e].title}
                </h2>
                <p className="text-sm text-zinc-400 line-clamp-3">
                  {content[e].synopsis}
                </p>

                {/* Botões */}
                <div className="flex gap-3 mt-2">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition text-white text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="currentColor"
                    >
                      <path d="M320-200v-560l440 280-440 280Z" />
                    </svg>
                    Assistir
                  </button>

                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-white text-sm"
                    onClick={() => {
                      removeToWatchList(e);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="currentColor"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                    Remover
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
