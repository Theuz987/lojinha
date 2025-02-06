'use client'

import { useState } from "react";

function Cadastro() {

    const [nome, setNome] = useState("");
    const [errorNome, setErrorNome] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errorpassword, setErrorPassword] = ("");

    function Salvar(){
        console.log("O nome cadastrado é: "+ nome);
        setNome(nome.toUpperCase())
        
        if(nome.length < 5){
            setErrorNome(true);
        }
        else{
            setErrorNome(false);
        }

        if(password != confirm){
            setErrorPassword(false);
        }
        else{
            setErrorPassword(true);
        }
    }

    return ( 
        <div className="p-5 text-lg">
            <h1 className="text-lg">Cadastro</h1>
            <hr/>

            <p>Digite o seu nome:</p>
            <input onChange={(a)=> setNome(a.target.value) } value={nome} className="outline" />

            <br/>
            { errorNome == true ?  
                <div className="bg-red-600 text-white">
                    <p>O nome deve conter pelo menos 5 caracteres</p>
                </div>
            :
            <div></div>
            }
            
            <p>Digite sua senha:</p>
            <input onChange={(a)=> setPassword(a.target.value) } value={password} className="outline" />
            <p>Confirma a senha:</p>
            <input onChange={(a)=> setConfirm(a.target.value) } value={confirm} className="outline" />

            { errorpassword == true ?  
                <div className="bg-red-600 text-white">
                    <p>As senhas digitadas não coincidem...</p>
                </div>
            :
            <div></div>
            }

            <button onClick={()=> Salvar()} className="p-3 mt-5 bg-lime-500 text-white">Salvar</button>
        </div>
     );
}

export default Cadastro
