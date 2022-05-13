import React from "react";
import { MdOutlineGroups } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { FaAward } from "react-icons/fa";

// components

import Footer from "components/Footers/Footer.js";
import Navbar from "components/Navbars/AuthNavbar";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-lightBlue-350"
          >
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="md:w-5/12 container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full px-4 ml-auto mr-auto text-left">
                  {/* <div className=""> */}
                  <h1 className=" font-semibold text-5xl text-black">
                    E-Fidelity - Cartão Fidelidade Digital
                  </h1>
                  <p className="mt-4 text-lg text-black">
                    Somos StartUp que tem como missão auxiliar os empreendedores a conquistarem sua posição no mercado digital, oferecendo serviços que permite uma maior conectividade com os seus consumidores e, consequentemente, possibilitar um alavancamento nas vendas.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                <img
                  alt="..."
                  src={require("assets/img/header-image.svg").default}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="container relative mx-auto mt-16">
                <div className="items-center flex flex-wrap">
                  <div className="w-full px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className=" font-semibold text-5xl text-black">
                        Nossos serviços
                      </h1>
                      <p className="mt-4 text-lg text-black">
                        Somos StartUp que tem como missão auxiliar os empreendedores a conquistarem sua posição no mercado digital, oferecendo serviços que permite uma maior conectividade com os seus consumidores e, consequentemente, possibilitar um alavancamento nas vendas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 md:w-6/12 pt-6 w-full px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-230-px max-h-230-px">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FaAward size={25} />
                    </div>
                    <h6 className="text-xl font-semibold">Alavanque suas vendas</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Com a ajuda da e-fidelity, você pode visualizar os seus
                      clientes fiéis, aqueles que te acompanham com frequência.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 md:w-6/12 pt-6 w-full px-4 text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-230-px max-h-230-px">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <GoCreditCard size={30} />
                    </div>
                    <h6 className="text-xl font-semibold">Cartão fidelidade</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Já possui um cartão fidelidade digital? Como empreendedor, você já deve ter notado a importância de fidelizar os clientes e mantê-los engajados e satisfeitos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 md:w-6/12 pt-6 w-full px-4 text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-230-px max-h-230-px">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FaStore size={30} />
                    </div>
                    <h6 className="text-xl font-semibold">Lojistas</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Tenha as melhores ferramentas para administrar melhor as suas vendas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 md:w-6/12 pt-6 w-full px-4 text-center ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg min-h-230-px max-h-230-px">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <MdOutlineGroups size={30} />
                    </div>
                    <h6 className="text-xl font-semibold">Clientes</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Nosso objetivo principal é fazer com que o cliente volte mais vezes ao seu estabelecimento ou adquira seu serviço.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-50-px mb-2 font-semibold leading-normal">
                  Nosso aplicativo para celular
                </h3>
                <p className="text-20-px font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Para maior facilitação, tanto para os clientes quanto para os gestores do negócio, possuímos um aplicativo para celular!
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                  <img
                    alt="..."
                    src={require("assets/img/imagem-celular.svg").default}
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
