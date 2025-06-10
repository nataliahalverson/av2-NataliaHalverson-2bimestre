import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detalhes = () => {
  const { number } = useParams();
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!number) return;

    axios.get(`https://numbersapi.com/${number}?json`)
      .then(res => setFact(res.data.text))
      .catch(() => setFact('Erro ao carregar a curiosidade.'))
      .finally(() => setLoading(false));
  }, [number]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-pink-300 text-lg">
        Carregando curiosidade...
      </div>
    );
  }

  if (!number) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-pink-50 px-4">
        <p className="mb-4 text-pink-400 text-lg">
          Número inválido.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 pt-16 px-6 flex flex-col items-center">
      <div className="max-w-xl w-full bg-white rounded-lg border border-pink-200 p-8 shadow-sm">
        <div className="text-6xl font-semibold text-pink-700 mb-6 text-center select-none">
          {number}
        </div>

        <h1 className="text-2xl font-semibold text-pink-600 mb-4 text-center">
          Curiosidade sobre o número {number}
        </h1>

        <p className="text-pink-700 text-base leading-relaxed text-center">
          {fact}
        </p>
      </div>
    </div>
  );
};

export default Detalhes;
