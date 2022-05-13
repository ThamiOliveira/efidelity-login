import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Register() {
  const setGender = (event) => {
    console.log(event.target.value);
  };

  const [userInfo, setuserInfo] = React.useState({
    nome: "",
    sobrenome: "",
    usuário: "",
    senha: "",
    confirmaSenha: "",
    tipoJuridico: "",
    email:"",
    Telefone:"",
    dataCadastroCliente:"",

  });

  const handleChange = (event) => {
    setuserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4 mt-20">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form className="mt-5">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nome*
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nome"
                      name="nome"
                      value={userInfo.nome}
                      onChange={handleChange.bind(this)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Sobrenome"
                      name="sobrenome"
                      value={userInfo.sobrenome}
                      onChange={handleChange.bind(this)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-usuário"
                    >
                      Usuário*
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Usuário"
                      name="usuário"
                      value={userInfo.usuário}
                      onChange={handleChange.bind(this)}
                    />
                    <div className="text-blueGray-400 mb-3">
                      <small>Obrigatório: 150 caracteres ou menos.
                        Letras, números e @/./+/-/_ apenas.
                      </small>
                    </div>

                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-usuário"
                    >
                      Senha*
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Senha"
                      name="senha"
                      value={userInfo.senha}
                      onChange={handleChange.bind(this)}
                    />
                    <div className="text-blueGray-400 mb-3">
                      <small>
                        <p> °Sua senha não pode ser muito parecida com o resto das suas informações pessoais.</p>
                        <p> °Sua senha precisa conter pelo menos 8 caracteres.</p>
                        <p> °Sua senha não pode ser uma senha comumente utilizada.</p>
                        <p> °Sua senha não pode ser inteiramente numérica.</p>
                      </small>
                    </div>

                  </div>

                  <div className="text-blueGray-400 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirmação de Senha*
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirmação de Senha"
                      name="confirmaSenha"
                      value={userInfo.confirmaSenha}
                      onChange={handleChange.bind(this)}
                    />
                    <div className="relative w-full mb-3">
                      <small>Informe a mesma senha informada anteriormente, para verificação.</small>
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tipo Juridico*

                    </label>
                    <div onChange={handleChange.bind(this)}>
                      <input type="radio" value="MS" name="tipoJuridico" /> Microempreendedor Individual <br></br>
                      <input type="radio" value="PF" name="tipoJuridico" /> Pessoa Física <br></br>
                      <input type="radio" value="S" name="tipoJuridico" /> Simples <br></br>
                      <small>Informe o seu perfil.</small> <br></br>
                    </div>
                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      E-mail*
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="E-mail"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange.bind(this)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Telefone*
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Telefone"
                      name="Telefone"
                      value={userInfo.Telefone}
                      onChange={handleChange.bind(this)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Data de Cadastro do Cliente*
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=" Data de Cadastro do Cliente"
                      name="dataCadastroCliente"
                      value={userInfo.dataCadastroCliente}
                      onChange={handleChange.bind(this)}
                    />
                  </div>


                  <div className="text-center mt-6">
                    <button
                      onClick={handleSubmit}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Criar Conta
                    </button>
                  </div>


                  <div className="text-center mt-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        <Link to="/auth/login">
                          Já tem uma conta no E-Fidelity? Entrar na minha conta.
                        </Link>
                      </span>
                    </label>
                  </div>

                </form >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
