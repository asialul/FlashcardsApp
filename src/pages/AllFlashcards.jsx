import React, { createContext, useContext, useState } from "react";
import { FlashcardsContainer, SearchContainer } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/flaschcards");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllFlashcardsContext = createContext();

const AllFlashcards = () => {
  const { data } = useLoaderData();
  const [flashcards, setFlashcards] = useState([]);
  //const [error, setError] = useState(null);
  /*
  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await fetch("http://localhost:3000/flashcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFlashcards(data.info);
      } else {
        setError("Błąd poboru danych");
      }
    } catch (error) {
      console.error("Błąd podczas pobrania danych:", error);
      setError("Błąd podczas pobrania danych");
    }
  };
*/
  return (
    <AllFlashcardsContext.Provider value={{}}>
      <SearchContainer />
      <FlashcardsContainer />
    </AllFlashcardsContext.Provider>
  );
};
export const useAllFlashcardsContext = () => useContext(AllFlashcardsContext);

export default AllFlashcards;
