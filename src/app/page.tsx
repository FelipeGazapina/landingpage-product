'use client'
import { ArrowBigRight, ArrowBigUp, ArrowRightFromLine, ArrowRightIcon, ChevronDown, Coffee, HelpingHand, Leaf } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


const FAQ = [
  {
    id: 1,
    pergunta: 'Qual é o material principal da caneca?',
    resposta: 'Nossa caneca é fabricada com materiais naturais de alta qualidade, proporcionando uma experiência eco-friendly.',
    active: false
  },
  {
    id: 2,
    pergunta: 'Como a caneca mantém a temperatura da bebida?',
    resposta: 'Utilizamos tecnologia inovadora que preserva o calor ou a frescura da sua bebida por mais tempo, garantindo uma experiência sensorial única.',
    active: false
  },
  {
    id: 3,
    pergunta: 'Há opções de cores e designs?',
    resposta: 'Sim, oferecemos uma paleta de cores suaves e designs estilosos para atender aos diferentes gostos e preferências.',
    active: false
  },
  {
    id: 4,
    pergunta: 'A caneca é segura para uso no micro-ondas e na lava-louças?',
    resposta: 'Recomendamos verificar as instruções específicas, mas geralmente, nossas canecas são seguras para uso no micro-ondas e podem ser lavadas na lava-louças.',
    active: false
  },
  {
    id: 5,
    pergunta: 'Qual é a capacidade da caneca?',
    resposta: 'A capacidade pode variar, mas geralmente oferecemos diferentes tamanhos para atender às necessidades individuais.',
    active: false
  },
  {
    id: 6,
    pergunta: 'A caneca é sustentável?',
    resposta: 'Sim, nos esforçamos para criar produtos sustentáveis, utilizando materiais naturais e eco-friendly em nossa produção.',
    active: false
  },
]
export default function Home() {
  const [faq, setFAQ] = useState<any>([]);

  useEffect(() => { setFAQ(FAQ) })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-zinc-700">
      <section className="w-full h-[100vh] md:mb-24 lg:h-[80vh]">
        <div className="h-[60vh] grid grid-cols-1 xl:grid-cols-2 xl:gap-5 px-5 md:w-full  xl:container mx-auto my-10 items-end">
          <div className="self-center flex flex-col bg-transparent">
            <p className="text-4xl lg:text-[48px] font-bold flex flex-wrap 
            ">
              Fabricada com materiais naturais de alta qualidade
            </p>
            <span>esta caneca exala charme ecológico</span>
            <a className="font-bold text-white bg-orange-800 block w-1/2 lg:w-1/5 text-center py-2 rounded-lg mt-10
            hover:scale-105 transition cursor-pointer mb-5">
              COMPRE J&Aacute;</a>
            <div className="hidden flex-col gap-5 w-full mt-4 xl:ml-10 md:flex 2xl:hidden">
              <div className="flex">
                <Leaf className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium">Fabricada com materiais naturais de alta qualidade</span>
              </div>
              <div className="flex">
                <HelpingHand className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium"> Elaborada para oferecer uma experiência tátil única</span>
              </div>
              <div className="flex">
                <Coffee className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium">Mantem a temperatura da sua bebida por mais tempo</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-5">
            <div className="ml-5 mb-5 lg:ml-0 lg:mb-0">
              <Image className="w-[250px] h-[300px] lg:w-[300px] lg:h-[500px] object-cover rounded-2xl shadow-md rotate-[5deg]
              ml-24 absolute"
                src={'/caneca-2.png'} width={500} height={500} alt="produto" />
              <Image className="w-[250px] h-[300px] lg:w-[300px] lg:h-[500px] object-cover rounded-2xl shadow-md rotate-[-10deg]"
                src={'/caneca.png'} width={500} height={500} alt="produto" />
            </div>
            <div className="hidden flex-col gap-5 w-full xl:ml-10 min-[320px]:flex min-[320px]:mt-4 md:hidden 2xl:flex">
              <div className="flex">
                <Leaf className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium">Fabricada com materiais naturais de alta qualidade</span>
              </div>
              <div className="flex">
                <HelpingHand className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium"> Elaborada para oferecer uma experiência tátil única</span>
              </div>
              <div className="flex">
                <Coffee className="border-2 rounded-full w-10 h-10 p-1 mr-4 text-orange-800 border-orange-800" size={'2rem'} />
                <span className="font-medium">Mantem a temperatura da sua bebida por mais tempo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 h-[80vh] lg:min-h-[60vh] justify-between">
        <Image className="border-2 w-[80%] mx-auto lg:max-w-[720px] rounded-xl shadow-md md:ml-12 lg:ml-24" width={1020} height={480} src={'/canecas.png'} alt="canecas" />
        <div className="
        bg-gradient-to-r from-orange-800 to-orange-300 w-full h-min
        rounded-l-xl p-8 lg:pr-24
        ">
          <h2 className="text-2xl lg:text-3xl text-white font-bold mb-4">
            Apresentamos a caneca dos seus sonhos
          </h2>
          <p className="w-full lg:w-[80%] text-lg font-medium text-white/80">
            uma peça que une beleza, estilo e funcionalidade de maneira extraordinária. Fabricada com materiais naturais de alta qualidade, esta caneca exala charme ecológico. Seu design refinado e estiloso faz dela não apenas um recipiente para suas bebidas favoritas, mas também uma obra de arte em si.
          </p>
        </div>
      </section>
      <section className="container mx-auto min-h-[60vh]">
        <h2 className="text-3xl font-bold mb-4 px-4 md:p-0">Dúvidas? Estamos Aqui para Ajudar!</h2>
        <span className="mb-4 block px-4 md:p-0">
          Se você tiver perguntas adicionais sobre nossas canecas especiais, confira as respostas abaixo ou entre em contato conosco. Estamos prontos para oferecer assistência e garantir que sua experiência com nossos produtos seja incrível!
        </span>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-orange-300 p-10 rounded-lg shadow-lg">
          {FAQ.map((elem, idx) => <li key={idx} className="bg-white w-full h-auto shadow-lg font-medium text-2xl p-4 flex flex-col items-start rounded-md">
            <span className="flex items-center justify-between w-full">
              {elem.pergunta} <ChevronDown />
            </span>
            <p className="hidden">{elem.resposta}</p>
          </li>)}

        </ul>

      </section>
      <footer className="min-h-[30vh] bg-gradient-to-b from-orange-50 to-orange-100 w-full flex flex-col justify-between">
        <Image className="bg-white rounded-full object-cover w-24 h-24 block mx-auto my-10" src={'/caneca-sem-fundo.png'} width={150} height={150} alt="logo" />
        <span className="text-center block mb-2">Made by lypes.agency</span>
      </footer>
    </main>
  );
}
