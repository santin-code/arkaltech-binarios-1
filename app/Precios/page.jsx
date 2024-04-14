
import './precios.module.css'

export default function Precios() {
  const precios = [{
    id: 1,
    nombreProducto: 'Silicon Liquido Pelican 100ML ',
    precioTienda: 18.28,
    precioPublico: 22,
  }, {
    id: 2,
    nombreProducto: 'Silicon Liquido Pelican 250ML ',
    precioTienda: 39.41,
    precioPublico: 44,
  },{
    id: 3,
    nombreProducto: 'Ficha De Trabajo (5x8) ',
    precioTienda: 18.28,
    precioPublico: 22,
  }]
  return (
    <>
      <div className='text-white text-xs  w-11/12 border-slate-200 border  mt-5 my-auto mx-auto md:text-base md:w-8/12 '>
        <div className='flex'>
          <p className='w-1/2 border-slate-200 border'>Producto</p>
          <div className='border  border-slate-200 w-1/2 flex'>
            <p className='w-1/2 border-r border-slate-200'>Precio Tienda</p>
            <p className='w-1/2 '>Precio Publico</p>
          </div>
        </div>
        {
          precios.map((p) => {
            return (
              <div key={p.id} className='flex'>
                <p className='w-1/2 border-slate-200 border'>{p.nombreProducto}</p>
                <div className='border  border-slate-200 w-1/2 flex'>
                  <p className='w-1/2 border-r border-slate-200'>{'$ ' + p.precioTienda}</p>
                  <p className='w-1/2 '>{'$ ' + p.precioPublico}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
