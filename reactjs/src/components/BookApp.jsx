import React, { useState } from "react";
import BookInput from "./BookInput";
import BookDisplay from "./BookDisplay";

const BookApp = () => {
  const [books, setBooks] = useState([]);
  const [toggle, setToggle] = useState({ isChecked: false });

  function handleAddName(newBookname, newAuthorName) {
    setBooks((prev) => [
      ...prev,
      {
        id: Math.trunc(Math.random() * 100),
        name: newBookname,
        author: newAuthorName,
        isChecked: false,
      },
    ]);
  }

  function handleToggle(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id == id ? { ...book, isChecked: !book.isChecked } : book,
      ),
    );
  }

  function handleDelete(id){
    setBooks((prev) => prev.filter(book=>book.id!=id))
  }

  return (
    <div className="h-screen flex text-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
        <div className="text-3xl text-blue-700 mb-4 text-center font-bold">
          Book Manager
        </div>
        <div className="space-y-4">
          <BookInput handleAddName={handleAddName} />
          <BookDisplay books={books} handleToggle={handleToggle} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default BookApp;
