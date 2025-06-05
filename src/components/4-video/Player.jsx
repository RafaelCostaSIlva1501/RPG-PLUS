import { useSection } from "../../SectionContext.jsx";
import { content } from "../../content.js";

export default function Player() {
  const { sectionIndex, setSectionIndex, serieIndex, epIndex, setEpIndex } =
    useSection();

  const videoId = content[serieIndex].list[epIndex].src;

  if (sectionIndex === 1) {
    return (
      <section className="flex flex-col justify-between h-full bg-zinc-900">
        {/* Topo com botão voltar */}
        <div className="p-4 bg-black">
          <button
            onClick={() => setSectionIndex(0)}
            className="hover:opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#F3F3F3"
            >
              <path d="m287-446.67 240 240L480-160 160-480l320-320 47 46.67-240 240h513v66.66H287Z" />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div className="flex-1 flex items-center justify-center bg-black">
          <iframe
            className="aspect-video w-full max-w-5xl rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}?si=IStjBQAyx8vgVIir`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        {/* Rodapé com botões */}
        <div className="flex justify-between items-center p-4 bg-black text-white">
          {/* Botão Anterior */}
          <button
            className="flex items-center gap-2 w-max px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition"
            onClick={() => {
              if (epIndex === 0) {
                console.log("Primeiro EP");
              } else {
                setEpIndex(epIndex - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3F3F3"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            Episódio Anterior
          </button>

          {/* Botão Próximo */}
          <button
            className="flex items-center gap-2 w-max px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition"
            onClick={() => {
              if (epIndex === content[serieIndex].list.length - 1) {
                console.log("Ultimo EP");
              } else {
                setEpIndex(epIndex + 1);
              }
            }}
          >
            Próximo Episódio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3F3F3"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </button>
        </div>
      </section>
    );
  }
}
