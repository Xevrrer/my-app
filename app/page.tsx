'use client'
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";


export default function Home() {
  const [width, setWidth]   = useState(1000);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
},[])

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="w-full flex justify-center mt-10 text-6xl font-semibold select-none">Awesome app test</div>
      <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      />
    </div>
  );
}
