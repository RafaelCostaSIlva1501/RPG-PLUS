import { useSection } from "../../SectionContext.jsx";

export default function Episodes({ index, episode, access }) {
  const {
    sectionIndex,
    setSectionIndex,
    serieIndex,
    setSerieIndex,
    modalOn,
    setModalOn,
    epIndex,
    setEpIndex,
  } = useSection();

  return (
    <article
      className="flex flex-col gap-2 w-full max-w-[500px] p-3 rounded-md bg-zinc-800 text-white shadow-md cursor-pointer hover:bg-zinc-700"
      onClick={() => {
        setSectionIndex(1);
        setModalOn(false);
        setEpIndex(index);
      }}
    >
      <div className="flex items-start gap-3">
        <img
          src={episode.thumb || `../img/${access}/ep${index + 1}.jpg`}
          alt={`Thumbnail do episódio ${index}`}
          className="w-28 h-16 rounded-md bg-zinc-700 object-cover"
        />

        <div>
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-zinc-300">
              {episode.title || `Episódio ${index}`}
            </span>
            <span className="text-xs text-zinc-400">{episode.duration}</span>
          </div>

          <p className="text-xs text-zinc-200 leading-snug line-clamp-3">
            {episode.synopsis || "Sinopse não disponível."}
          </p>
        </div>
      </div>
    </article>
  );
}
