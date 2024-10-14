'use client'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {

  const [quote, setQuote] = useState('');

  useEffect(() => {
    getRandomQuote()
  }, [])

  const getRandomQuote = async () => {
    const URL = "https://dummyjson.com/quotes"
    const response = await axios.get(URL);
    const randomIndex = Math.floor(Math.random() * 30)
    const randomQuote = response.data.quotes[randomIndex];
    setQuote(randomQuote);
    console.log(randomQuote);
  }


  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-gradient-to-r from-[#50C9C3] to-[#96DEDA]">
      <div className="md:w-1/2 p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-black text-center">
          Random Quote
        </h1>

        <div className="bg-[#0eaad5] p-6 rounded-md">
          <p className="text-white italic text-3xl">
            "{quote?.quote || 'Loading...'}"
          </p>
          <p className="mt-4 text-right font-medium text-lg text-white">
            — {quote?.author || ''}
          </p>
        </div>

        <button
          onClick={getRandomQuote}
          className="mt-6 text-xl bg-[#0eaad5] text-white py-2 px-4 rounded-lg active:scale-90 transition-colors w-full"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
