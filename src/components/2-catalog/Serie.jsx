import { useSection } from "../../SectionContext.jsx";

export default function Serie({ data, index }) {
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
      className="flex flex-col justify-end shrink-0 w-52 h-32 md:w-60 md:h-36 mx-auto rounded-xl overflow-hidden relative cursor-pointer group transition-transform  shadow-md"
      style={{
        backgroundImage: `url('img/${data.access}/banner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro no hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => {
          setModalOn(true);
          setSerieIndex(index);
        }}
      />

      {/* Título e informações */}
      <div className="relative z-10 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-base font-semibold text-white truncate">
          {data.title}
        </h3>
        <span className="text-xs text-zinc-300">{data.year}</span>
      </div>
    </article>
  );
}
