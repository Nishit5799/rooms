import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-6 md:p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-full flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-6 py-8 md:px-8 md:py-12 shadow-md">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl md:text-3xl">
            Hello, I'm Nishit
          </h1>
          <p className="text-gray-500 mt-2">Welcome here</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6 text-3xl">↓</p>
        </Section>

        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl md:text-3xl">
            Here are my skillsets 🔥
          </h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>GSAP</li>
            <li>ThreeJs</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>MongoDb</li>
          </ul>
          <p className="animate-bounce mt-6 text-3xl">↓</p>
        </Section>

        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl md:text-3xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500 mt-2">
            I'm a self-taught developer and I will do wonders for you!
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};