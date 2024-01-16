import { salsa, press_start} from '@/app/ui/fonts'
export default function JavaScriptBasico() {
  return (
    <div className={`text-white text-xl w-11/12 mt-7 mb-20 items-center justify-center mx-auto my-auto md:w-8/12 ${salsa.className} `}>
      {" "}
      <div className="text-2xl w-full flex items-center justify-center  font-bold mt-4 mb-4">JavaScript Básico</div>
			<div >
				<p className="font-bold mb-1 mt-1">Características de JavaScript: </p>
				<p><span className="text-cyan-400 font-bold">Lenguaje Interpretado:</span> Se le llama lenguaje interpretado por el hecho que no tiene que pasar por un compilador mas bien va directamente a ejecutarse en el navegador. </p>
	
			</div>

			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Orientado a objetos:</span> Abarca todos los aspectos de otros lenguajes orientados a objetos como son clases, la herencia, el polimorfismo. </p>
			</div>


			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Es un lenguaje imperativo:</span> Esto significa que todas las instrucciones se van ejecutando linea por linea o paso por paso. </p>
			</div>


			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Case sensitive (Uper and Lower Case):</span> Es sensible a mayúsculas y minúsculas, si creamos una porción de código que tiene mayúsculas y creamos otra misma porción de código que tiene minúscula cada código va a ser muy muy distinto. </p>
			</div>

			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Es basado en prototipos, instancias y clases:</span> Cuando creamos un objeto lo hacemos a traves de instanciar clases, entonces como JavaScript es un lenguaje basado en prototipos, los objetos que creamos van a estar basados en otros objetos que fueron previamente construidos por el equipo de desarrollo de JavaScript. </p>
			</div>

			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Es de tipado débil:</span> Significa que el valor de las variables puede cambiar a lo largo del tiempo. </p>
				<p className="">Mas adelante veremos lo que es una variable pero en pocas palabras el tipado débil significa que si la variable tiene el valor <span className="text-cyan-400 font-bold" >Dalto</span> esa misma variable en el futuro puede tener el valor <span className="text-cyan-400 font-bold" >29</span>.</p>
				<p>El tipado débil nos permite que una variable pueda ser primero un numero, después un texto etc.</p>
			</div>

			<div className='mt-4 mb-4' >
				<p><span className="text-cyan-400 font-bold">Es un lenguaje dinámico:</span> Significa que la variable no se ajusta al dato, mas bien en dato se ajusta a la variable.</p>
				<p>En los lenguajes como Java cuando queremos crear una variable lo que tenemos que hacer es </p>
			</div>

			<code className={`bg-white text-black text-sm p-2 ${press_start.className} `}>npm install arkal</code>
			<p>.</p>
			<code className={`bg-white text-red-800 text-sm p-2 ${press_start.className} `}>hora/minuto/segundo: 1:45:23</code>
			
    </div>
  );
}
