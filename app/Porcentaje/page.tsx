"use client"

import Link from "next/link";
import { lobster } from "@/app/ui/fonts";
import { useState } from "react";

export default function Porcentaje() {
  const [inputValue, setInputValue] = useState('');
  const [porcentaje, setPorcentaje] = useState(0);

  const handleChange = (e: { target: { value: any; }; }) =>{
    const value = e.target.value;
    setInputValue(value)

    const calcularPorcentaje = (value * 16) / 100; 
    setPorcentaje(calcularPorcentaje)
  }

  return (
    <div className=" flex flex-col w-full   items-center justify-center  mx-auto my-auto  md:w-8/12">
      <p className="text-white my-4" >CALCULADORA DE PORCENTAJE DE IVA</p>
      <input type="number" value={inputValue} onChange={handleChange} className="rounded bg-#def border-0 outline-none bg-cyan-200 " />
      <p className="text-white mt-4" >el 16% de {inputValue} es {porcentaje}</p>
    </div>
  );
}
