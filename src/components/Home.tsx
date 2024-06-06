import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Welcome Dear Student</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Exam Online Website</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img src="./php.png" className="w-full"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">PHP Course</h2>
          </div>
          <div className="flex-grow">
            <Link to={`/quiz/php`} className="mt-3 text-indigo-500 inline-flex items-center">Tack Exam
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img src="./react.png" className="w-full h-full rounded-full"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">React Course</h2>
          </div>
          <div className="flex-grow">
            <Link to={`/quiz/react`} className="mt-3 text-indigo-500 inline-flex items-center">Tack Exam
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img src="./js.png" className="w-full h-full"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">JS Course</h2>
          </div>
          <div className="flex-grow">
            <Link to={`/quiz/js`} className="mt-3 text-indigo-500 inline-flex items-center">Tack Exam
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
