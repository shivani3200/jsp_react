import React, { useState } from "react";

const BookInput = ({ handleAddName }) => {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  function handleAdd() {
    if (!book || !author) return;
    handleAddName(book, author);
    setAuthor("");
    setBook("");
  }
  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-700 ">
          Add a Book
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="enter book name"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-between gap-4">
<button 
             onClick={handleAdd} 
             className="self-center bg-blue-600 text-white rounded-lg py-2 px-12  hover:bg-blue-800 transition duration-200">
            Add
          </button>
           <button 
             onClick={handleAdd} 
             className="self-center bg-green-300 text-white rounded-lg py-2 px-12  hover:bg-green-500 transition duration-200">
            Read
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BookInput;
