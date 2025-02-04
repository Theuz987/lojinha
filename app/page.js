'use client'

import { useState } from "react";
// Na primeira linha de comando, desse ou outro exemplo digitar 'use client' ou 'use server (padrão do React)'

export default function Home() {

  //Aqui entra o JavaScript normal
//"" = React; {} = JavaScript
  //letcarrinho = 0
  let [carrinho, setCarrinho] = useState(0);
  let [cupom, setCupom] = useState(499.99);
  let [total, setTotal] = useState();
//*let [variavel usada, função modificadora] = function useState(valor a ser declarado);//

  function handleCarrinho(){
    let novoCarrinho = carrinho;
      setCarrinho(carrinho + 1)
      novoCarrinho++
  }

  function removeCarrinho(){
    setCarrinho(carrinho - 1)
    novoCarrinho--
}

function cleanCarrinho(){
  setCarrinho = 0
}

function addCupom(){
    setCupom(399.99)
}

function valorTotal(){
    setTotal(novoCarrinho * cupom)
}

//  function handleCarrinho(adicionar){
//   if(adicionar == true){
//     setCarrinho(carrinho + 1)
//   }
//   else{
//     setCarrinho(carrinho - 1)
//    }
//  }
 
//<button onClick={()=>handleVariavelUsada()} className="">Adicionar ao carrinho</button>
//<button onClick={()=>handleVariavelUsada(true or false)} className="bg-lime-400 text-black mt-5 mb-3 p-3">Adicionar ao carrinho</button>
  return (
    <div className="p-5">

        <h1 className="bg-sky-500 text-white p-3"> FALA AEEEEEE, SEUS P*TO DO NEXT </h1>
        <p className="p-3 text-lg">
            Carrinho: <strong> {carrinho} </strong> itens
        </p>

        <button onClick={()=>cleanCarrinho()} className="bg-yellow-400 text-black mt-5 mb-6 p-3 ml-3">Limpar</button>
        <button onClick={()=>addCupom()} className="bg-yellow-800 text-black mt-5 mb-6 p-3">Adicionar cupom</button>
    
      <hr/>

      <p className="p-3 text-lg">
            Valor total: R$ <strong> {valorTotal} </strong>
      </p>

      <hr/>


        <h2 className="p-3">Produtos</h2>
          <div className="border bg-sky-700 w-fit p-2 text-center text-white">
            <img className="ml-2 mt-2 mb-2 mr-2"  src="https://placehold.co/200"/>
            <h3 className="text-lg text-lime-200 font-bold">Black Myth: Wukong</h3>
            <p className="text-lg text-lime-200 font-bold"> Hiper Ultra Mega</p>
            <p className="text-lg text-lime-200 font-bold">Blaster Edition</p>
            <p>R$ {cupom}</p>
            <button onClick={()=>handleCarrinho()} className="bg-lime-400 text-black mt-5 mb-3 p-3">Adicionar ao carrinho</button>
            <br/>
            <button onClick={()=>removeCarrinho()} className="bg-red-600 text-black mt-5 mb-3 p-3">Remover do carrinho</button>
          </div>
    </div>
  );
}
