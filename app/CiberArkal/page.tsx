import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function CiberArkal() {
  const cardImages = [
      {
        id: 1,
        title: "Control ciber",
        href: "https://drive.google.com/file/d/15sC3e8zWxYVDPwM1dXQGBxr5QJx9R7ms/view?usp=sharing",
      },
      {
        id: 2,
        title: "Cartas de recomendación Masculino",
        href: "https://docs.google.com/document/d/17o2ygiut1MfPxGOWvAPtEaEvX01ffYMP/edit?rtpof=true&sd=true",
      },
      {
        id: 3,
        title: "Cartas de recomendación Femenina",
        href: "https://docs.google.com/document/d/1YAgHHH3n_gLuJNFH7ycJnkpPvs1aHpwH/edit?rtpof=true&sd=true"
      },
      {
        id: 4,
        title: "Antología señora Silvia",
        href: "https://drive.google.com/file/d/12zccVZSYQRQ5BL80iWtY6BQsu5UP2vSp/view"
      },
      {
        id: 5,
        title: "el principito (a color $32 ya engargolado $44)",
        href: "https://drive.google.com/file/d/13YJh-ToDcjHtkL2i7RBftc_g-F9yTcrr/view"
      },
      {
        id: 6,
        title: "Adivinanzas, Dichos, Refranes y Pregones ",
        href: "/CiberArkal/AdivDichosRefranesPregones"
      },
      {
        id: 7,
        title: "Convertidor (I Love PDF)",
        href: "https://www.ilovepdf.com/"
      },{
        id: 8,
        title: "Block Poster",
        href: "https://www.blockposters.com/",
      },{
        id: 9,
        title: "Absorbedor de Tinta Lleno (T220) ",
        href: "https://www.youtube.com/watch?v=y8zh6d3x7B8",
      },{
        id: 10,
        title: "Plantillas Poliedros (PDF)",
        href: "https://drive.google.com/file/d/1QIWuFiu-aAfvPNq9jf66Rf02Ql4JJqTl/view?usp=sharing",
      },{
        id: 11,
        title: "Himno Nacional Mexicano y del EM",
        href: "https://docs.google.com/document/d/1dvZqqkwraldc-9NEyeqavsGgfA6RQ4Ij/edit?pli=1",
      }
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16 items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className=" w-40 h-20 m-1 overflow-hidden flex items-center bg-white justify-center w-5/12   border-2 border-solid border-sky-700 rounded   md:w-2/5  hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={`  h-full w-full  flex items-center text-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className}`}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
