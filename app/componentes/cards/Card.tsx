import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Introduccion() {
  const cardImages = [
    {
      id: 1,
      title: "Cursos de Programación",
      href: "/programacion",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      href: "/AI",
    },
    {
      id: 3,
      title: "Web Imagenes",
      href: "/webImages",
    },
    {
      id: 4,
      title: "Ciber Arkal",
      href: "/CiberArkal",
    },
    {
      id: 5,
      title: "Fandom Games",
      href: "/FandomGames",
    },
    {
      id: 6,
      title: "Frases/Videos/Motivacion",
      href: "/FrasesVideos",
    },
    {
      id: 7,
      title: "Resina Epoxica /videos",
      href: "/ResinaEpoxica",
    },
    {
      id: 8,
      title: "Pendientes",
      href: "/Pendientes",
    }
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16  items-center justify-center  mx-auto my-auto   md:mt-4 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className="w-10/12 m-1 flex items-center bg-white  justify-center w-full rounded  hover:bg-black hover:border-white hover:border-solid hover:border-2  transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={` w-full h-auto flex items-center justify-center mx-auto my-auto text-black text-2xl p-2 hover:text-white md:text-sm ${lobster.className}`}
            >
              {p.title}
            </p>
            
          </Link>
        );
      })}
    </div>
  );
}
