'use client'

import { useRef } from "react"

export default function Home() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  return (
    <div className="flex items-center justify-center w-full h-screen gap-4 ">
      <input
        ref={inputRef1}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef2.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      ></input>
      <input
        ref={inputRef2}
        onChange={(e) => {
          if (e.target.value !== "") {
            inputRef3.current.focus();
          }
        }}
        className="w-8 h-8 p-1 text-center text-black"
      ></input>
      <input
        ref={inputRef3}
        className="w-8 h-8 p-1 text-center text-black"
      ></input>
    </div>
  );
}