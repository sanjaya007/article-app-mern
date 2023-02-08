import "./App.css";

function App() {
  return (
    <>
      <div className="App font-roboto grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="box px-3 pb-3 bg-blue-500">
          <h1 className="text-white py-4 px-4 font-bold text-3xl text-center">
            I am blue !!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
            omnis voluptate laborum quibusdam optio corporis ducimus rerum
            provident fugit vitae tenetur iure suscipit, id quasi modi voluptas
            molestias? Sed.
          </p>
        </div>
        <div className="box px-3 pb-3 box-red bg-red-500">
          <h1 className="  text-white py-4 px-4 font-bold text-3xl text-center">
            I am red !!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
            omnis voluptate laborum quibusdam optio corporis ducimus rerum
            provident fugit vitae tenetur iure suscipit, id quasi modi voluptas
            molestias? Sed.
          </p>
        </div>
        <div className="box px-3 pb-3 box-green bg-green-500">
          <h1 className="  text-black py-4 px-4 font-bold text-3xl text-center font-lily">
            I am green !!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
            omnis voluptate laborum quibusdam optio corporis ducimus rerum
            provident fugit vitae tenetur iure suscipit, id quasi modi voluptas
            molestias? Sed.
          </p>
        </div>
        <div className="box px-3 pb-3 bg-orange-500">
          <h1 className="tracking-widest  text-black py-4 px-4 font-bold text-3xl text-center">
            I am orange !!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
            omnis voluptate laborum quibusdam optio corporis ducimus rerum
            provident fugit vitae tenetur iure suscipit, id quasi modi voluptas
            molestias? Sed.
          </p>
        </div>
        <div className="box px-3 pb-3 box-black bg-[#000000]">
          <h1 className="tracking-widest  text-white py-4 px-4 font-bold text-3xl text-center">
            I am shadow !!
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
            omnis voluptate laborum quibusdam optio corporis ducimus rerum
            provident fugit vitae tenetur iure suscipit, id quasi modi voluptas
            molestias? Sed.
          </p>
        </div>
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
