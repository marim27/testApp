import React, { useState } from "react";
import { QuestionType } from "./Quiz";

interface Props {
  onAnswer: (answer: string) => void;
  filteredQuestions: QuestionType[];
}

const Question: React.FC<Props> = ({ filteredQuestions, onAnswer }) => {
  const [clickedButtons, setClickedButtons] = useState<{ [key: string]: string | null }>({});

  const handleButtonClick = (question: string, choice: string) => {
    const previousChoice = clickedButtons[question];

    if (previousChoice === choice) {
      return; // If the same button is clicked, do nothing
    }

    setClickedButtons(prevState => ({ ...prevState, [question]: choice }));

    if (previousChoice !== undefined && previousChoice !== null) {
      // If the answer was changed, adjust the score appropriately
      onAnswer(choice);
    } else {
      // If this is the first answer, call onAnswer
      onAnswer(choice);
    }
  };

  return (
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4 md:w-2/3 mt-5">
        <div className="flex h-full flex-col">
          <div className="flex items-start text-start flex-col">
            {filteredQuestions.map((qu) => (
              <div key={qu.question} className="bg-gray-100 rounded-lg p-8 mb-5 w-full">
                <h2 className="text-2xl mb-3">* {qu.question}</h2>
                <div>
                  {qu.choices.map((choice) => (
                    <button
                      key={choice}
                      className={`m-2 rounded-md py-1 px-3 text-emerald-50 ${
                        clickedButtons[qu.question] === choice ? "bg-blue-900" : "bg-blue-600"
                      }`}
                      onClick={() => handleButtonClick(qu.question, choice)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
