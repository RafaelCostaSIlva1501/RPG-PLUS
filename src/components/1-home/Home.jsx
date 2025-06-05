import { useSection } from "../../SectionContext.jsx";
import { useEffect, useState } from "react";
import { content } from "../../content.js";
import Header from "./Header.jsx";

export default function Home() {
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
    addToWatchList,
    removeToWatchList,
    listIndex,
  } = useSection();

  const [serie, setSerie] = useState(0);
  const [wallpaper, setWallpaper] = useState(0);

  const showSpotlight = () => {
    const randomSerie = Math.floor(Math.random() * content.length);

    const randomWallpaper = Math.floor(
      Math.random() * content[randomSerie].wallpapers.length
    );

    setSerie(randomSerie);
    setWallpaper(randomWallpaper);
  };

  useEffect(() => {
    showSpotlight();
  }, []);

  if (sectionIndex === 0) {
    return (
      <main
        className="flex flex-col h-[480px] md:h-[550px]"
        style={{
          backgroundImage: `url('img/${content[serie].access}/wallpaper${
            wallpaper + 1
          }.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <div className="flex flex-col justify-between gap-4 h-full w-full px-8 md:px-16 py-8">
          <img
            className="w-48 md:w-56"
            src={`img/${content[serie].access}/logo.png`}
            alt={`${content[serie].title} logo`}
          />

          <p className="w- p-4 bg-black/40 rounded-md text-white max-w-2xl text-sm md:text-base shadow-md">
            {content[serie].synopsis}
          </p>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 py-2 px-6 h-min bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
              onClick={() => {
                setModalOn(true);
                setSerieIndex(serie);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
                fill="#000"
              >
                <path d="M320-200v-560l440 280-440 280Z" />
              </svg>
              <span className="font-semibold">Assistir</span>
            </button>

            {listIndex.includes(serie) ? (
              <button
                className="group flex items-center gap-2 h-min w-max py-2 px-6 bg-green-600 rounded-lg text-white shadow-md hover:bg-red-600 transition"
                onClick={() => removeToWatchList(serie)}
              >
                {/* ✅ Estado padrão: Adicionado */}
                <div className="flex items-center gap-2 group-hover:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="#F3F3F3"
                  >
                    <path d="M382-256 200-438l56-56 126 126 322-322 56 56-378 378Z" />
                  </svg>
                  <span className="font-semibold">Adicionado!</span>
                </div>

                {/* 🗑️ Estado hover: Remover */}
                <div className="hidden group-hover:flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="currentColor"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                  <span className="font-semibold">Remover da lista</span>
                </div>
              </button>
            ) : (
              <button
                className="flex items-center gap-2 h-min w-max py-2 px-6 bg-black/70 rounded-lg text-white shadow-md hover:bg-black/90 transition"
                onClick={() => {
                  setSerieIndex(serie);
                  addToWatchList(serie);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="#F3F3F3"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
                <span className="font-semibold">Adicionar à lista</span>
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }
}
