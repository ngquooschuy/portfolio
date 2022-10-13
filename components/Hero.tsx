import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm FE Credit",
      "Co-khi-back-khoa-tay-ngang-IT.tsx",
      "Trying To Do Better",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://file.tinnhac.com/resize/600x-/2019/12/17/20191217175344-6383.png"
        alt="avatar"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          FE Credit Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experiece">
            <button className="heroBtn">Experiece</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
