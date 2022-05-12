import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-lightBlue-350 pt-8 pb-6 ">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-4/12 px-4">
              <img mt-16 src={require("assets/img/footer-imagem.png").default}></img>
              <h5 className="text-lg mt-8 mb-2 text-blueGray-600">
                Somos uma StartUp que oferecemos serviços que permite uma maior conectividade com os consumidores e, consequentemente, possibilitar um alavancamento nas vendas, para os empreendedores.
              </h5>
            </div>

          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                © e-fidelity. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
