import { useEffect, useState } from "react";

export default function FullLoader({
  message = [
    "Setting up your account",
    "Cleaning dashboard",
    "Setting up your store",
    "Calculating metrics",
  ],
}: {
  message?: string[];
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countId = setInterval(() => {
      if (count === message.length - 1) {
        setCount(0);
      } else {
        setCount((c) => c + 1);
      }
    }, 1800);
    return () => clearInterval(countId);
  }, [count]);

  return (
    <section className="w-full z-50 bg-white h-screen flex items-center justify-center absolute top-0 left-0">
      <div className="flex items-center flex-col gap-8">
        <div className="loader"></div>
        {/* {message &&
          message.map((message, i) => (
            <p className="text-sm font-medium" key={i}>
            ))} */}
        {message && <p className="text-sm font-medium">{message[count]}</p>}
      </div>
    </section>
  );
}
