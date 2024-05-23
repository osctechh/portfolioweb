import FacebookIcon from "./icons/FacebookIcon"
import InstagramIcon from "./icons/InstagramIcon"
import PhoneInComing from "./icons/PhoneInComing"
import WhatAppIcon from "./icons/WhatAppIcon"

function Footer() {
    return (
        <footer className="bg-black/40 rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href=""
                    className="hover:underline">OscTechh™</a>. Todos los derechos reservados.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Redes</a>
                    </li>
                    <li>
                        <a href="">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <WhatAppIcon />
                        </a>
                    </li>
                    <li className="ml-6">
                        <a href="#" className="hover:underline">Contacto</a>

                    </li>
                    <li className="flex justify-center ml-4">
                        <PhoneInComing />
                        <p className="flex justify-center items-center ml-4 text-yellow-400">: +54 2995693132</p>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer