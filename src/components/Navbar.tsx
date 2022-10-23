import { useState } from "react";
import './Navbar.css'

interface Props {
  fixed: boolean;
}

export default function Navbar({ fixed }: Props) {
  const [active, setActive] = useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-[#2A2A2A]">
        <div className="container mx-0 flex flex-wrap  items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ul className="flex flex-col items-center  lg:flex-row list-none lg:ml-auto">
              <li className="">
                <a
                  className="leading-relaxed inline-block whitespace-nowrap uppercase"
                  href="#"
                >
                  <img
                    src="/logo.png"
                    alt="epicardo logo"
                    className="w-16 ml-3 pt-2 top-0"
                  />
                </a>
              </li>
              <li className="nav-item">
              <a
                  className="px-auto py-6 flex items-center  uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Tienda</p>
              </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-auto py-6 flex items-center  uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Preguntas Frecuentes</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-auto py-6 flex items-center  uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Ayuda</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-auto py-6  flex items-center  uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Unreal Engine</p>
                </a>
              </li>
            </ul>            
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-auto py-6  flex items-center uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Iniciar Sesion</p>
                </a>
              </li>
              <li className="nav-item get-epic">
                <a
                  className="px-auto py-6  flex items-center uppercase font-bold leading-snug"
                  href="#"
                >
                  <p className="ml-2 text-sm">Consigue Epicardo Games</p>
                </a>
              </li>
            </ul>
            {/* <button className={`btn ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
              <div></div>
              <div></div>
              <div></div>
            </button>  */}
          </div>
        </div>
        <div>         
          
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
