 import {useState} from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (

      <div className="w-full h-screen"
        style={{
          backgroundColor: color
        }} >
        <div className="fixed flex  flex-wrap justify-center items-center h-full gap-6 px-44 top-80 left-72">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
            <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setColor("green")}
          >
            Green
          </button>
            <button
            className="bg-pink-500 text-white px-4 py-2 rounded"
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
           <button
            className=" bg-orange-500 text-white px-4 py-2 rounded"
            onClick={() => setColor(" Orange")}
          >
            Orange
          </button>
           <button
            className=" bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
           <button
            className=" bg-purple-500 text-white px-4 py-2 rounded"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          </div>
          </div>
  )
}

export default App
