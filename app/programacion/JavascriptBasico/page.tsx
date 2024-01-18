import { salsa} from '@/app/ui/fonts'
import Link from 'next/link';

const temario = [
	{
		id: 1,
		title: 'Introducción',
		href: '/programacion/JavascriptBasico/introduccion'
	}
]

export default function JavaScriptBasico() {

  return (
    <div className={`text-white text-xl w-11/12 mt-7 mb-20 items-center justify-center mx-auto my-auto md:w-8/12 ${salsa.className} `}>
			{
				temario.map((e)=>{
					return(
						<Link key={e.id} href={e.href}>
							<div className='w-11/12 h-auto flex items-center justify-center rounded mx-auto my-auto mt-2 mb-2 p-2 text-black bg-white'>introducción</div>
						</Link>
					)
				})
			}
    </div>
  );
}
