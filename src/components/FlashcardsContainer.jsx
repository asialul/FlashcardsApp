import Flashcard from "./Flashcard";
import Wrapper from "../assets/wrappers/FlashcardsContainer";

import { useAllFlashcardsContext } from "../pages/AllFlashcards";

const FlashcardsContainer = () => {
  const { data } = useAllFlashcardsContext();
  const { flashcards } = data;
  if (flashcards.length === 0) {
    return <Wrapper>No flashcards available</Wrapper>;
  }
  return (
    <Wrapper>
      <div className="flashcards">
        {flashcards.map((flashcard) => {
          return <Flashcard key={flashcard._id} {...flashcard} />;
        })}
      </div>
    </Wrapper>
  );
};
export default FlashcardsContainer;
