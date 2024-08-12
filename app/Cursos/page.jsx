import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Programacion() {
  const cardImages = [
    {
      id: 1,
      title: "Dalto Javascript",
      href: "/Cursos/DaltoJavaScript",
    },
    {
      id: 2,
      title: "Tailwind",
      href: "https://tailwindcss.com/",
    },
    {
      id: 4,
      title: "Hak4u (Text)",
      href: "https://docs.google.com/document/d/1lf4dq0ZIomsIditKuQ_auhIynD0rbund4yqeqa6TC9A/edit",
    },
    {
      id: 5,
      title: "CCS4VI (VIDEO)",
      href: "/Cursos/CCS4VI",
    },
    {
      id: 6,
      title: "Python (udemy)",
      href: "https://www.udemy.com/course/100-days-of-code/learn/lecture/23103754#overview",
    },
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16 items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12 ">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className=" w-40 h-20 m-1 overflow-hidden flex items-center bg-white justify-center w-5/12   border-2 border-solid border-sky-700 rounded   md:w-2/5  hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={` h-full w-full text-center  flex items-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className} `}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
