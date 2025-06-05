import { useSection } from "../../SectionContext.jsx";
import { content } from "../../content.js";
import Serie from "./Serie.jsx";

export default function Catalog({ category }) {
  const {
    sectionIndex,
    setSectionIndex,
    serieIndex,
    setSerieIndex,
    epIndex,
    setEpIndex,
  } = useSection();

  const filteredSeries = content.filter((serie) =>
    serie.tags.includes(category)
  );

  if (sectionIndex === 0) {
    return (
      <section className="flex flex-col w-full gap-6 p-6 bg-zinc-900 shadow-sm">
        {/* Título da categoria */}
        <h2 className="text-2xl md:text-3xl font-bold text-white capitalize border-b border-zinc-700 pb-2">
          {category}
        </h2>

        {/* Lista de séries */}
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
          {filteredSeries.map((serie, i) => (
            <Serie key={i} data={serie} index={i} />
          ))}
        </div>
      </section>
    );
  }
}
