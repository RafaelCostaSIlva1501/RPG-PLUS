import { SectionProvider } from "./SectionContext.jsx";
import Main from "./components/1-home/Home.jsx";
import Search from "./components/5-search/Search.jsx";
import Catalog from "./components/2-catalog/Catalog.jsx";
import Modal from "./components/3-modal/Modal.jsx";
import Player from "./components/4-video/Player.jsx";
import List from "./components/6-list/List.jsx";
import { useSection } from "./SectionContext.jsx";
import { useEffect } from "react";

function AppContent() {
  const { sectionIndex, epIndex, createList } = useSection();

  useEffect(() => {
    createList();
  }, []);

  return (
    <>
      <Main />
      <Search />
      <Catalog category="Ordem Paranormal" />
      <Catalog category="Ordem Paranormal" />
      <Modal />
      {sectionIndex === 1 && epIndex !== null && <Player />}
      <List />
    </>
  );
}

export default function App() {
  return (
    <SectionProvider>
      <AppContent />
    </SectionProvider>
  );
}
