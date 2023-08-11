"use client";

import { useEffect, useState } from "react";

type QuoteProps = {
  initialQuotes: string[];
};

const Quote = ({ initialQuotes }: QuoteProps) => {
  const [quotes, setQuotes] = useState<string[]>(initialQuotes);
  const [quote, setQuote] = useState<string>(quotes.shift() || "Carregando...");

  const handleChangeQuote = () => {
    const getNewQuote = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      const translatedQuoteResponse = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${data.content}`
      );

      const translatedQuote = await translatedQuoteResponse.json();

      quotes.push(translatedQuote[0][0][0] as string);

      console.log(quotes);
    };

    if (quotes.length === 0) return getNewQuote();
    setQuote(quotes.shift()!);

    if (quotes.length >= 6) return;

    for (let i = 0; i <= 2; i++) {
      getNewQuote();
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <div
        className={`text-slate-800 ${
          quote.length > 80
            ? quote.length > 120
              ? "text-xl"
              : "text-2xl"
            : "text-3xl"
        } font-medium text-center max-w-screen-lg h-14 max-sm:h-fit max-sm:text-lg`}
      >
        {quote ? quote : "Carregando..."}
      </div>
      <button
        onClick={handleChangeQuote}
        className="px-20 py-4 bg-[#0070f3] rounded-2xl text-2xl font-medium text-white hover:saturate-[0.8] hover:scale-95 transition-all duration-200 select-none max-sm:text-lg"
      >
        Nova Mensagem
      </button>
    </div>
  );
};

export default Quote;
