import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Programacion() {
  const cardImages = [
    {
      id: 1,
      title: "Javascript Básico (Dalto)",
      href: "https://docs.google.com/document/d/1zZFN05vJCGG9oQqSzlfDdARSsyUhDeU0V6aYBEN3PXA/edit?pli=1",
    },
    {
      id: 2,
      title: "Tailwind",
      href: "https://tailwindcss.com/",
    },
    {
      id: 4,
      title: "Hak4u",
      href: "https://hack4u.io/",
    }
      
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16  items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className="w-40 m-1 overflow-hidden flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-center w-5/12    border-2 border-solid border-sky-700 rounded   md:w-1/5 md:m-4 hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out _blank "
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
