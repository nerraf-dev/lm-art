import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-24 ">
      <h1>About</h1>

      <div >
          <Image src="/media/images/logo-16-9.png" alt="L Meriel Art" width='690' height='388' style={{ objectFit: 'cover' }} />
        </div>

      <p>
        El arte, las líneas, los colores me han permitido verme a mí misma, en una hoja, lienzo, en blanco encontrar un espacio para sentir, pausar, transmutar, transformar lo que pasa fuera y dentro, un espejo para verme.
        Aquí solo vengo a mostrarme, vulnerable, feliz, triste, ansiosa, a exponer lo que se mueve dentro y con suerte mover algo en ustedes.
      </p>
      <p>---</p>
      <p>
        Art, lines, colors have allowed me to see myself, on a blank sheet of paper, canvas, to find a space to feel, to pause, to transmute, to transform what happens outside and inside, a mirror to see myself.
        Here I only come to show myself, vulnerable, happy, sad, anxious, to expose what moves inside and hopefully move something in you.
      </p>
      <p>#lmerielart</p>
    </main>
  );
}
