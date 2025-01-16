import Typewriter from "typewriter-effect";

export default function HeroText() {
  return (
    <h1 className="w-full uppercase font-Bebas_Neue text-6xl text-center">
      Your trusted Partner in{" "}
      <span className="text-[#F68333]">
        <Typewriter
          options={{
            strings: ["Design", "Development", "Marketing"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </h1>
  );
}
