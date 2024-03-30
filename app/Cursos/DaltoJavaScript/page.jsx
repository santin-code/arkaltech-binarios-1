import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Programacion() {
  const cardImages = [
    {
      id: 1,
      title: "Video 1 (Primera Parte)",
      href: "https://docs.google.com/document/d/1zZFN05vJCGG9oQqSzlfDdARSsyUhDeU0V6aYBEN3PXA/edit?pli=1",
    },
    {
      id: 2,
      title: "Video 1 (Segunda Parte)",
      href: "https://docs.google.com/document/d/1A4rM4xRVmgHBFAJC5StJKoyv16IvbyjqBK3Tk7giggc/edit",
    }
      
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
