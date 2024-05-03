

export default function Precios() {
  const precios = [{
    id: 1,
    nombreProducto: 'Silicon Liquido Pelican 100ML (pieza) ',
    precioTienda: 18.28,
    precioPublico: 22,
  }, {
    id: 2,
    nombreProducto: 'Silicon Liquido Pelican 250ML (pieza) ',
    precioTienda: 39.41,
    precioPublico: 44,
  },{
    id: 3,
    nombreProducto: 'Ficha De Trabajo (5x8 pulgadas) ',
    precioTienda: 25.46,
    precioPublico:` 30 PQ o (3x $1)`,
  },{
    id: 4,
    nombreProducto: 'Ficha Bibliografica (3x5 pulgadas) ',
    precioTienda: 9.66,
    precioPublico:` 15 PQ o (5x $1)`,
  },{
    id: 5,
    nombreProducto: 'Clip Tropicalizado #1 (caja) ',
    precioTienda: 13.52,
    precioPublico:` 16 Caja o (5x $1)`,
  },{
    id: 6,
    nombreProducto: 'Broche Baco [caja (8cm)] ',
    precioTienda: '73.24',
    precioPublico:'3 (pieza)',
  },{
    id: 7,
    nombreProducto: 'Grapa Standard SMART (5000 pz) ',
    precioTienda: '19.91',
    precioPublico:'3 (x tira)',
  },{
    id: 8,
    nombreProducto: 'Marcador Permanente Baco (negro c/12pz)',
    precioTienda: '190.82',
    precioPublico:'18 (pieza)',
  },{
    id: 9,
    nombreProducto: 'Goma Copito [caja (20pz)] ',
    precioTienda: '46',
    precioPublico:'4 (pieza)',
  },{
    id: 10,
    nombreProducto: 'Goma Migajon M20 ',
    precioTienda: '89.73',
    precioPublico:'5 (pieza)',
  },{
    id: 11,
    nombreProducto: 'Folder Costilla c/4',
    precioTienda: '38.89',
    precioPublico:'12 (pieza)',
  },{
    id: 12,
    nombreProducto: 'Marcador Pelikan (Colorella 10 pzs) ',
    precioTienda: '85.05',
    precioPublico:'10 (pieza)',
  },{
    id: 13,
    nombreProducto: 'Plumon Pelikan (Markana Twist 24 pzs) ',
    precioTienda: '74.91',
    precioPublico:'5 (pieza) 90 paquete',
  },{
    id: 14,
    nombreProducto: 'Plumon Aquarelo Junior (AZOR 24 pzs) ',
    precioTienda: '103.06',
    precioPublico:'6 (pieza) 115 paquete',
  },{
    id: 15,
    nombreProducto: 'Silicon delgado 1kg (barras)',
    precioTienda: '123.40',
    precioPublico:'2.5 (pieza)',
  }
  ]
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
