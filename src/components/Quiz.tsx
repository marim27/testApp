import React, { useState, useEffect } from "react";
import Question from "./Question";
import { Link, useParams } from "react-router-dom";

// Define the QuestionType
export type QuestionType = {
	question: string;
	choices: string[];
	answer: string;
	category: string;
};

const questions: QuestionType[] = [
	// PHP Questions
	{
		question: 'In PHP, a class can be inherited from one base class and with multiple interfaces.',
		choices: ['false', 'True'],
		answer: 'false',
		category: 'php'
	},
	{
		question: 'The MIME type for a CSS style sheet is "stylesheet = CSS".',
		choices: ['false', 'True'],
		answer: 'false',
		category: 'php'
	},
	{
		question: 'In PHP, variables are case-sensitive.',
		choices: ['false', 'True'],
		answer: 'false',
		category: 'php'
	},

	// React Questions
	{
		question: 'Parent constructors are not called implicitly if the child class defines its own constructor.',
		choices: ['false', 'True'],
		answer: 'false',
		category: 'react'
	},
	{
		question: 'Elements that have higher z-index values are displayed in front of elements with lower z-index values.',
		choices: ['false', 'True'],
		answer: 'True',
		category: 'react'
	},
	{
		question: 'In React, state updates are asynchronous.',
		choices: ['false', 'True'],
		answer: 'True',
		category: 'react'
	},

	// JavaScript Questions
	{
		question: '$this is a reference to the calling object.',
		choices: ['false', 'True'],
		answer: 'True',
		category: 'js'
	},
	{
		question: 'JavaScript is a case-sensitive language.',
		choices: ['false', 'True'],
		answer: 'True',
		category: 'js'
	},
	{
		question: 'In JavaScript, "==" and "===" perform the same operation.',
		choices: ['false', 'True'],
		answer: 'false',
		category: 'js'
	},
];


const Quiz: React.FC = () => {
	const { category } = useParams<{ category: string }>();
	const [isscore, setIsScore] = useState(false);
	const [filteredQuestions, setFilteredQuestions] = useState<QuestionType[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	useEffect(() => {
		const filtered = questions.filter(q => q.category === category);
		setFilteredQuestions(filtered);
		setCurrentQuestion(0);
		setScore(0);
	}, [category]);

	const handleAnswer = (answer: string) => {
		if (
			filteredQuestions[currentQuestion] &&
			answer === filteredQuestions[currentQuestion].answer
		) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < filteredQuestions.length) {
			setCurrentQuestion(nextQuestion);
		}
	};

	return (
		<div className="container mx-auto flex px-5 py-24 flex-col items-center">

			{!isscore &&
				<>
					<h1 className="text-center text-3xl mb-3">Quiz {category}</h1>
					{filteredQuestions.length > 0 && currentQuestion < filteredQuestions.length ? (
						<>
						<Question
						filteredQuestions={filteredQuestions}
							onAnswer={handleAnswer}
						/>
						{/* {currentQuestion-1==filteredQuestions.length-1&& */}
						<button className="mt-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 
						rounded text-lg" onClick={() => { setIsScore(true) }} >Submit</button>
						{/* // } */}
						</>
					) : (
						<p className="text-center">No questions available for this category.</p>
					)}
				</>
			}
			{isscore &&
				<>
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Score of {category} Exam</h1>
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{score} / {filteredQuestions.length}</h1>
					<div className="flex justify-center mt-5">
						<Link className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 
						rounded text-lg" to="/">Go To Home</Link>
					</div>
				</>
			}
		</div>
	)
}

export default Quiz;
