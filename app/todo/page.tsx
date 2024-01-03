import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Introduccion() {
  const cardImages = [
    {
        id: 5,
        title: "League Of Legends Wiki",
        href: "https://leagueoflegends.fandom.com/es/wiki/League_of_Legends_Wiki",
      },
      {
        id: 6,
        title: "Frase 1 de Instagram",
        href: "https://www.instagram.com/reel/Cx-btL3gaXv/?utm_source=ig_web_copy_link",
      },
      {
        id: 7,
        title: "Polioleo para dibujos o impresiones",
        href: "https://youtu.be/WWe5EHlv7Y8?si=JxYZVJNVttYzd0iv",
      },
      {
        id: 8,
        title: "Trabajar con resina epoxica",
        href: "https://www.youtube.com/watch?v=bk9wSGMmH4k",
      },
      {
        id: 9,
        title: "Tela gruesa Cortinas Parisina centro Toluca segundo piso",
        href: "",
      },
      {
        id: 10,
        title: "gobekli-tepe",
        href: "",
      },
      {
        id: 12,
        title: "crear Robotica",
        href: "",
      },
      {
        id: 14,
        title: "Declarar SAT",
        href: "",
      },
      {
        id: 17,
        title: "Control ciber",
        href: "https://drive.google.com/file/d/15sC3e8zWxYVDPwM1dXQGBxr5QJx9R7ms/view?usp=sharing",
      },
      {
        id: 18,
        title: "Hombre top video youtube",
        href: "https://youtu.be/R4bIBA5Jtrw?feature=shared",
      },
      {
        id: 19,
        title: "Graficos vectoriales gratis",
        href: "https://pixabay.com/es/",
      },
      {
        id: 20,
        title: "Auto Draw",
        href: "https://autodraw.com/",
      },
      {
        id: 21,
        title: "Clean PNG",
        href: "https://www.cleanpng.com/",
      },
      {
        id: 22,
        title: "Cartas de recomendación Masculino",
        href: "https://docs.google.com/document/d/17o2ygiut1MfPxGOWvAPtEaEvX01ffYMP/edit?rtpof=true&sd=true",
      },
      
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16  items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className="w-40 m-1 overflow-hidden flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-center w-5/12    border-2 border-solid border-sky-700 rounded   md:w-1/5 md:m-4 hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={`  h-20 flex items-center justify-center mx-auto my-auto text-slate-200 text-1xl p-2 ${lobster.className}`}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
