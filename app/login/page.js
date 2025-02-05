'use client'

import { useState } from "react";

function Login() {

    const[adm, setAdm] = useState(false);

    function setAdmin(){
        if(adm == true){
         setAdm(false)
        }
     else{
         setAdm(true)
        }
    }

    return ( 
        <div className="p-5">
            <h1 className="text-lg text-blue-500 mb-2">Página De Login</h1>
            <p>Você está logado como <strong> {adm == true ? <span>Administrador</span> : <span>Usuário</span>} </strong>.</p>
            <button onClick={()=>setAdmin()} className={`mt-3 ${adm == true ? `bg-sky-500` : `bg-red-500`} text-white p-2`}> {adm == true ? <span>Voltar para usuário</span> : <span>Entrar como administrador</span>}</button>
       {/* <button onClick={()=>setAdmin()} className={"mt-3"+ (adm == true ? "bg-sky-500" : "bg-red-500") +"text-white p-2"}> {adm == true ? <span>Voltar para usuário</span> : <span>Entrar como administrador</span>}</button> */}
        
        {
            adm == true?
            <div>
                <h2 className="text-xl text-lime-800 mt-10">Olá administrador</h2>
                <p>Sejem bem-vindo</p>

                <button className="bg-black text-white p-3 mt-5">Cadastrar usuário</button>
                <p>Digite o nome:</p>
                <input className="border-2"/>
            </div>
         :
            <div></div>
        }
            
        </div>
    );
}

export default Login
