import React from "react";

interface Props {
	question: string;
	choices: string[];
	onAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = ({ question, choices, onAnswer }) => {
	return (
		<div className="flex flex-wrap -m-4 justify-center">
			<div className="p-4 md:w-2/3  mt-5">
				<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
					<div className="flex justify-center items-center text-center flex-col">
						<h2 className="text-2xl mb-3">{question}</h2>
						<div>
							{choices.map((choice) => (
								<button
									key={choice}
									className="bg-blue-600 m-2 rounded-md py-1 px-3 text-emerald-50"
									onClick={() => onAnswer(choice)}
								>
									{choice}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
