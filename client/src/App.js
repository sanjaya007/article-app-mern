import "./App.css";

function App() {
  return (
    <>
      <div className="App font-roboto flex justify-between flex-col py-4 relative">
        <h1 className="my-4 bg-blue-500 text-white py-4 px-4 font-bold text-4xl text-center">
          I am blue !!
        </h1>
        <h1 className="my-4 bg-red-500 text-white py-4 px-4 font-bold text-4xl text-center">
          I am red !!
        </h1>
        <h1 className="my-4 bg-green-500 text-black py-4 px-4 font-bold text-4xl text-center font-lily">
          I am green !!
        </h1>
        <h1 className="tracking-widest my-4 mx-4 bg-[#ececec] text-black py-4 px-4 font-bold text-4xl text-center rounded-md shadow-2xl">
          I am shadow !!
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="transition duration-700 ease-in-out bg-blue-500 px-4 py-3 text-white font-mono rounded-md cursor-pointer hover:bg-blue-800 active:bg-green-500">
          Submit
        </button>
      </div>

      <div className="list flex pt-4 items-center space-x-10">
        <p className="bg-blue-500 text-white p-3">hello</p>
        <p className="bg-blue-500 text-white p-3">hello</p>
        <p className="bg-blue-500 text-white p-3">hello</p>
        <p className="bg-blue-500 text-white p-3">hello</p>
        <p className="bg-blue-500 text-white p-3">hello</p>
      </div>
    </>
  );
}

export default App;
