import { useSection } from "../../../SectionContext";

export default function ButtonMenu({ title, open }) {
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
  return (
    <button
      className="w-full  px-4 py-2 rounded hover:bg-gray-700 hover:scale-100"
      onClick={() => {
        setSectionIndex(open)
        setMenuOn(false)
      }}
    >
      {title}
    </button>
  );
}
