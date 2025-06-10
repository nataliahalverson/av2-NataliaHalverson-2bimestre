import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-pink-50 pt-16 pb-12 px-4 flex flex-col items-center">
      <h1 className="text-pink-700 text-3xl font-semibold mb-10 tracking-wide">
        Números Disponíveis
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl w-full">
        {numbers.map((number) => (
          <Link
            key={number}
            to={`/detalhes/${number}`}
            className="flex items-center justify-center border border-pink-200 rounded-lg py-6 text-xl font-medium text-pink-600 hover:bg-pink-100 transition"
          >
            {number}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
