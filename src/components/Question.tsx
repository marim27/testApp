import React from "react";
import { QuestionType } from "./Quiz";

interface Props {
	onAnswer: (answer: string) => void;
	filteredQuestions: QuestionType[];
}

const Question: React.FC<Props> = ({ filteredQuestions, onAnswer }) => {
	return (
		<div className="flex flex-wrap -m-4 justify-center">
			<div className="p-4 md:w-2/3  mt-5">
				<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
					<div className="flex justify-center items-center text-center flex-col">
						
							{filteredQuestions.map((qu) => (
								<>
							<h2 className="text-2xl mb-3">{qu.question}</h2>
							<div>
								{(qu.choices).map((choice) => (
									<button
										key={choice}
										className="bg-blue-600 m-2 rounded-md py-1 px-3 text-emerald-50 
										focus:ring focus:ring-blue-950"
										onClick={() => onAnswer(choice)}
									>
										{choice}
									</button>
								))}
							</div>
								</>
								
							))}
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
