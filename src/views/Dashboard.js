import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components

import Footer from "components/Footers/Footer.js";
import NavbarDashboard from "components/Navbars/NavbarDashboard";

export default function Dashboard() {
  const [codigoLogista, setCodigoLogista] = React.useState({
    cd: ""
  });

  const handleChangeInput = (event) => {
    setCodigoLogista({ ...codigoLogista, [event.target.name]: event.target.value });
  };

  const validaCodigo = () => {
    console.log(codigoLogista);
    if (codigoLogista.cd != "123") {
      notifyError();
      return;
    }
    notifyAccept();
  }

  const notifyError = () => toast.error("Código não encontrado");
  const notifyAccept = () => toast.success("Código validado com sucesso");

  return (
    <>
      <NavbarDashboard transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
          >
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="md:w-/12 container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full px-4 ml-auto mr-auto text-center">
                  {/* <div className=""> */}
                  <h1 className=" font-semibold text-4xl text-black">
                    Olá! Aproveite os benefícios do seu cartão fidelidade
                  </h1>
                  <hr className="my-6 border-black max-w-50-percent margin-auto mt-6" />
                  <p className="mt-10 textoDashPadrao">
                    Para cadastrar um cartão fidelidade informe o código do Lojista
                  </p>
                  {/* </div> */}
                </div>
                <form className="flex flex-col center-div">
                  <input type="text" className="code" name="cd" value={codigoLogista.cd} onChange={handleChangeInput.bind(this)} placeholder="Inserir código" />
                  <button type="button" onClick={() => validaCodigo()} className="button-validar-codigo">Validar código</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          autoClose={1000}
          limit={1}
          closeButton={false}
        />
      </main>
    </>
  );
}
