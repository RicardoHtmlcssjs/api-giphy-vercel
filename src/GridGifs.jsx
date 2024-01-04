// componente GridGifs donde se renderiza e iteran los gifs
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'
// se importa el framer motion y se le agtega a la etiqueta con un punto
// objeto variantses to sirve para no escribirlos directos en la etiqueta
const variants={
    inicial: {
        opacity: 0, scale: .5
    },
    animate: ({ index })=>({
        opacity: 1, scale: 1, transition: {
            duration: 1,
            delay: index*.1
        }
    })
}
export const GridGifs = ({gifs}) =>{
    // useView es un hook que viene ya con framerMotion que devuelve un booleano true si el objeto referenciado ya a sido visto y false si el objeto referenciado no a sido visto
    const ref = useRef(null)
    const estaVisto = useInView(ref)
    return(
        <>
            {
                gifs.map((gif, index)=>(
                    // se le esta agregando una animaciona ala etiqueta img poniendo antes el motion. initial: iniciara con una opacity: 0, animate: cuando se cargue el img la opacidad sera de 1, trasition: tiene un valor, duration: 2, equivale a 2 segundos, scale el tamaño,
                        <motion.img
                            ref={ref}
                            initial="inicial"
                            animate={estaVisto ? "animate" : "animate"}
                            // espesificando variantes
                            variants={variants}
                            // custom
                            custom={{index}}
                            className='gif' key={gif.id} src={gif.images.original.url} alt={gif.title} />
                ))
            }
        </>
    )
}