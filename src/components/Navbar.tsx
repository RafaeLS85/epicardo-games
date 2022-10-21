import React, { useState } from "react";
import { Menu } from "./Menu";

interface Props {
  fixed: boolean;
}

export default function Navbar({ fixed }: Props) {
  const [active, setActive] = useState(true);

  function handleOnClick(){
    setActive(!active)
  }
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-[#2A2A2A]">
        <div className="container mx-0 flex flex-wrap  items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ul className="flex flex-col items-center  lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="leading-relaxed inline-block whitespace-nowrap uppercase"
                  href="#"
                >
                  <img
                    src="/public/logo.png"
                    alt="epicardo logo"
                    className="w-10  ml-3 pt-2  top-0"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-twitter leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Tienda</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-pinterest leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Preguntas Frecuentes</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-pinterest leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Ayuda</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug  hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-pinterest leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Unreal Engine</span>
                </a>
              </li>
            </ul>            

            {/* <button
              className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button> */}
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-facebook-square leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Iniciar Sesion</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:text-white hover:border-b-2"
                  href="#"
                >
                  <i className="fab fa-twitter leading-lg opacity-75"></i>
                  <span className="ml-2 text-sm">Consigue Epicardo Games</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
            {active ?  <Menu onClick={handleOnClick} active={active} /> : null}
          
        </div>
      </nav>


      {/* --------------- */}

      <div className="mx-36 my-10">
       
        <div className="flex gap-2">           

                <input type="text" placeholder="Buscar en la tienda" className="bg-[#202020]  rounded-xl p-1" />            
           
                <div>
                    <ul className="flex flex-col items-center gap-2 lg:flex-row list-none lg:ml-auto">
                        <li>
                            <a href="#">Descubrir</a>
                        </li>
                        <li>
                            <a href="#">Examinar</a>
                        </li>
                        <li>
                            <a href="#">Noticias</a>
                        </li>
                    </ul>
                </div>    
        </div>

      </div>
    </>
  );
}
