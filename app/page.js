'use client'

import { useState } from "react";
// Na primeira linha de comando, desse ou outro exemplo digitar 'use client' ou 'use server' (padrão do React)'

export default function Home() {

  //Aqui entra o JavaScript normal
//"" = React; {} = JavaScript
//letcarrinho = 0
  const [carrinho, setCarrinho] = useState(0);
  const [cupom, setCupom] = useState(699.99);
  const [total, setTotal] = useState(0);
// let [variavel usada, função modificadora] = function useState(valor a ser declarado);//

const [sizes, setSizes] = useState (["Pê", "eMe", "Gê"]);
const[colors, setColors] = useState (["Pretu", "Amarélo", "Azul"]);
const[button, setButton] = useState (["PAC", "Sedex", "Retirada"]);

  function handleCarrinho(){
    let novoCarrinho = carrinho;
    setCarrinho(carrinho + 1)
    novoCarrinho++
    setTotal(novoCarrinho * cupom)
  }

  function removeCarrinho(){
    let novoCarrinho = carrinho;
    setCarrinho(carrinho - 1)
    novoCarrinho--
    setTotal(novoCarrinho * cupom)
  }

  function cleanCarrinho(){
  setCarrinho (0)
  }

  function addCupom(){
    setCupom(569.99)
  }
//  function handleCarrinho(adicionar){
//   if(adicionar == true){
//     setCarrinho(carrinho + 1)
//   }else{
//     setCarrinho(carrinho - 1)
//    }
//  }
 
//<button onClick={()=>handleVariavelUsada()} className="">Adicionar ao carrinho</button>
//<button onClick={()=>handleVariavelUsada(true or false)}>Adicionar ao carrinho</button>
  return (
    <div className="p-5">

        <h1 className="bg-sky-500 text-white p-3"> FALA AEEEEE, NEXT </h1>
        <p className="p-3 text-lg">
          Carrinho: <strong> {carrinho} </strong> itens
        </p>

        <button onClick={()=>cleanCarrinho()} className="border-spacing-2 bg-yellow-400 text-black mt-5 mb-6 p-3 ml-3">Limpar</button>
        <button onClick={()=>addCupom()} className="bg-yellow-800 text-black mt-5 mb-6 p-3 ml-4">Adicionar cupom</button>
      
      <hr/>
      <p className="p-3 text-lg">
          Valor total: R$ <strong> {total} </strong>
      </p>
      <hr/>

        <h2 className="p-3">Produtos</h2>
          <div className="border bg-sky-700 w-fit text-center text-white">
            <img className="mx-10 my-8" src="https://assets-prd.ignimgs.com/2024/08/18/blackmyth-1723969364570.jpg?width=300&crop=1%3A1%2Csmart&auto=webp"/>
            <h3 className="text-lg text-lime-200 font-bold">Black Myth: Wukong Hiper Ultra</h3>
            <h3 className="text-lg text-lime-200 font-bold">Mega Blaster Edition</h3>
            <br/>

            <p> Tamanhos: {sizes.map((i)=> <span>{i}, </span>)} </p>
            <br/>

            <p>Cores:</p>
            <br/>
            <ul>
              {colors.map((i)=> <li className="border ml-4 mb-2 mr-4">{i}</li>)}
            </ul>

            <br/>
            <p>Entrega:</p>
            <ul className="flex mx-2 gap-16 p-5 bg-grey-300">
              {button.map((i)=> <button className="bg-sky-200 border text-black p-2">{i}</button>)}
            </ul>

            <br/>
            <p>R$ {cupom}</p>
            <br/>
            <button onClick={()=>handleCarrinho()} className="bg-lime-400 text-black mt-6 mb-3 p-3 pr-14 pl-14">Adicionar ao carrinho</button>
            <br/>
            <button onClick={()=>removeCarrinho()} className="bg-red-600 text-black mt-6 mb-3 p-3 pr-14 pl-14">Remover do carrinho</button>
          </div>
    </div>
  );
}
