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
    <div className=" flex flex-wrap w-full mt-8 mb-16  items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      <input type="number" value={inputValue} onChange={handleChange} />
      <p className="text-white" >el porcentaje de {inputValue} es {porcentaje}</p>
    </div>
  );
}
