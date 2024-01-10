import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Pendientes() {
  const cardImages = [
      {
        id: 1,
        title: "Tela gruesa Cortinas Parisina centro Toluca segundo piso",
        href: "",
      },
      {
        id: 2,
        title: "gobekli-tepe",
        href: "",
      },
      {
        id: 3,
        title: "crear Robotica",
        href: "",
      },
      {
        id: 4,
        title: "Declarar SAT",
        href: "",
      }
      
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
