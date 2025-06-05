import { content } from "../../content.js";
import { useSection } from "../../SectionContext.jsx";
import Episodes from "./Episodes.jsx";

export default function Modal() {
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
  } = useSection();

  const { access, premiered, banner, synopsis, cast, list } =
    content[serieIndex];

  if (modalOn == true) {
    return (
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90%] max-w-[700px] h-[90%] z-50 bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        {/* Cabeçalho com banner da série */}
        <header
          style={{
            backgroundImage: `url('../img/${access}/banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[350px] relative"
        >
          {/* Overlay escuro no banner para melhorar contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

          {/* Botão para fechar o Modal */}
          <button
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
            onClick={() => setModalOn(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3F3F3"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </header>

        {/* Conteúdo principal */}
        <section className="flex flex-col gap-6 p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-y-auto">
          {/* Informações + Sinopse */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Informações */}
            <div className="flex flex-col gap-4 flex-1">
              {listIndex.includes(serieIndex) ? (
                <button
                  className="group flex items-center gap-2 h-min w-max py-2 px-6 bg-green-600 rounded-lg text-white shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out"
                  onClick={() => removeToWatchList(serieIndex)}
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
                  onClick={() => addToWatchList(serieIndex)}
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

              <div className="space-y-1 text-sm text-zinc-300">
                <p className="font-semibold text-white">1ª Temporada</p>
                <div className="flex flex-wrap gap-4 text-zinc-400">
                  <span className="whitespace-nowrap">{premiered}</span>
                  <span className="whitespace-nowrap">
                    {list.length} Episódios
                  </span>
                </div>
              </div>
            </div>

            {/* Sinopse */}
            <div className="flex-1">
              <p className="text-zinc-400 text-sm font-semibold mb-1">
                Sinopse:
              </p>
              <p className="text-white text-sm leading-relaxed">{synopsis}</p>
            </div>
          </div>

          {/* Lista de episódios + elenco */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Lista de episódios */}
            <div className="flex flex-col gap-2 flex-1">
              {list.map((ep, i) => (
                <Episodes key={i} index={i} episode={ep} access={access} />
              ))}
            </div>

            {/* Elenco */}
            <div className="flex-1 space-y-2">
              <p className="text-zinc-400 text-xs font-semibold">Elenco:</p>
              <div className="text-white text-xs flex flex-wrap gap-2">
                {cast.map((name, i) => (
                  <span
                    key={i}
                    className="bg-zinc-800 px-2 py-1 rounded-full hover:bg-zinc-700 transition cursor-pointer"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
