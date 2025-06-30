import React from 'react';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-600 text-white p-4 shadow-md">
        <div className="text-xl font-bold">CodeSchool</div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Teachers</li>
          <li className="hover:underline cursor-pointer">Holidays</li>
        </ul>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold">
          Contact Us
        </button>
      </nav>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold mt-10 text-center">hi home</h1>
    </div>
  );
}

export default App;
