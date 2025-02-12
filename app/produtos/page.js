'use client'
import { useState } from "react";

function Produtos() {

    const[product,setProduct]= useState({});

    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[quantity,setQuantity] = useState("");

    const[listing, setListing] = useState(false);
    const[register, setRegister] = useState(true);

    function setDisplay(tela){
        if(tela == "cadastro"){
            setRegister(true);
            setListing(false);
        }

        if (tela == "listagem"){
            setRegister(false);
            setListing(true);
        }
    }

    function save(e){
        e.preventDefault();

        const object = {
            // objeto:valor
            name:name,
            price:price,
            quantity:quantity,
            date: Date()
        }
        setProduct(object)
    }

    return ( 
        <div className="p-10">
            <h1 className="text-lg mb-10">Administração de produtos</h1>

            <div className="flex gap-10">

                {/* Menu Lateral */}
                <div>
                    <button onClick={()=>setDisplay("cadastro")} className="rounded-2xl bg-gray-200 p-4 mb-5 mr-7">Cadastro</button>
                    <br/>
                    <button onClick={()=>setDisplay("listagem")} className="rounded-2xl bg-gray-200 p-4 mb-5 mr-7">Listagem</button>
                </div>

                {/* Painel principal */}
                <div className=" flex justify-start">
                    
                    {/* Cadastro */}
                    {
                    register == true &&  
                    <div className="border-black rounded-xl p-10 border-4">
                        <h2 className="font-bold mb-4">Cadastro de produto</h2>
                        {/* O onSubmit só é usado no form */}
                        <form onSubmit={(e)=>save(e)}>
                            <label>
                                Digite o nome:
                                <br/>
                                <input onChange={(e)=>setName(e.target.value)}className="outline"/>
                            </label>
                            <br/>
                            <br/>

                            <label>
                                Digite o preço:
                                <br/>
                                <input onChange={(e)=>setPrice(e.target.value)} className="outline"/>
                            </label>
                            <br/>
                            <br/>

                            <label>
                                Digite a quantidade:
                                <br/>
                                <input onChange={(e)=>setQuantity(e.target.value)}className="outline"/>
                            </label>
                            <br/>
                            <br/>
                            <button className="rounded-2xl bg-gray-400 p-4 mt-6 mb-5">Salvar</button>
                        </form>
                    </div>
                    }
                </div>
                

                {/* Listagem */}
                {
                    listing == true&&
                    <div className="border-black p-10 rounded-xl border-4">
                        <h2 className="font-bold mb-5">Listagem de produtos</h2>

                        <ul>
                            <li>{product.name} - R$ {product.price} - {product.quantity} itens</li>
                            <br/>
                            <br/>
                            <li>Produto 2</li>
                            <br/>
                            <br/>
                            <li>Produto 3</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
     );
}

export default Produtos;
