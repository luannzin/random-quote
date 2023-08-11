import Profile from "./components/Profile";
import Quote from "./components/Quote";

const getEveryInfo = async () => {
  const getNewQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    const translatedQuoteResponse = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${data.content}`,
      {
        cache: "no-cache",
      }
    );

    const translatedQuote = await translatedQuoteResponse.json();

    return translatedQuote[0][0][0];
  };

  let quotes: string[] = [];

  for (let i = 0; i <= 2; i++) {
    quotes.push(await getNewQuote());
  }

  return { quotes };
};

export default async function Home() {
  const { quotes } = await getEveryInfo();

  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col gap-8 px-8">
      <Profile width={150} height={150} />
      <Quote initialQuotes={quotes} />
    </div>
  );
}
