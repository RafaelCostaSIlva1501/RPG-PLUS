import { useSection } from "../../SectionContext.jsx";
import Menu from "./Menu.jsx";

export default function Header() {
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
  } = useSection();

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-3 w-max overflow-hidden">
        <img
          className="w-9 peer z-[2] cursor-pointer"
          src="/rpg-icon.png"
          alt="RPG PLUS Icon"
        />

        <img
          className="w-24 -translate-x-24 opacity-0 peer-hover:translate-x-0 peer-hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer"
          src="/rpg-text.png"
          alt="RPG PLUS Texto"
        />
      </div>

      <Menu />

      <button onClick={() => setMenuOn(true)} className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          width="28"
          fill="#F3F3F3"
          viewBox="0 -960 960 960"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
    </header>
  );
}
