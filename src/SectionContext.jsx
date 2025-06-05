import { createContext, useContext, useState } from "react";

// Criação do contexto com nome claro
const SectionContext = createContext();

// Componente provider
export const SectionProvider = ({ children }) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [serieIndex, setSerieIndex] = useState(0);
  const [menuOn, setMenuOn] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [epIndex, setEpIndex] = useState(null);
  const [listIndex, setListIndex] = useState([]);

  const createList = () => {
    const storage = localStorage.getItem("userData");

    if (!storage) {
      const user = {
        watchList: [],
        watching: [],
      };

      localStorage.setItem("userData", JSON.stringify(user));
    } else {
      console.log("Já existe um local de armazenamento");
    }
  };

  const addToWatchList = (i) => {
    // Pega os dados atuais do localStorage
    const data = JSON.parse(localStorage.getItem("userData"));

    // Verifica se o índice da série já está na lista
    const alreadyInList = data.watchList.includes(i);

    // Se não estiver na lista, adiciona
    if (!alreadyInList) {
      data.watchList.push(i); // Adiciona o índice da série
      localStorage.setItem("userData", JSON.stringify(data)); // Salva novamente no localStorage

      const userData = JSON.parse(localStorage.getItem("userData"));
      setListIndex(userData?.watchList || []);

      console.log(`Série ${i} adicionada à WatchList`);
    } else {
      // Se já estiver na lista, apenas informa no console
      console.log(`Série ${i} já está na WatchList`);
    }
  };

  const removeToWatchList = (i) => {
    // Pega os dados atuais do localStorage
    const data = JSON.parse(localStorage.getItem("userData"));

    // Filtra o array, removendo o índice que foi passado
    const updatedWatchList = data.watchList.filter((index) => index !== i);

    // Atualiza o array no objeto principal
    data.watchList = updatedWatchList;

    // Salva de volta no localStorage
    localStorage.setItem("userData", JSON.stringify(data));

    const userData = JSON.parse(localStorage.getItem("userData"));
    setListIndex(userData?.watchList || []);

    console.log(`Série ${i} removida da WatchList`);
  };

  return (
    <SectionContext.Provider
      value={{
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
        createList,
        addToWatchList,
        removeToWatchList,
        listIndex,
        setListIndex,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export function useSection() {
  return useContext(SectionContext);
}
