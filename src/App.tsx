import './App.css'
import Badge from './components/Badge'
import Footer from './components/Footer'
import ProjectWindows from './components/ProjectWindows'
import CodeIcons from './components/icons/CodeIcons'
import Email from './components/icons/Email'
import GitHub from './components/icons/GitHub'
import LinkenIn from './components/icons/LinkenIn'
function App() {

  return (
    <>
      <div>

        <header className='w-full flex justify-between items-center py-3'>
          <img className='rounded-full w-20 h-20' src="https://unavatar.io/osctechh" alt="Imagen Avatar" />
          <nav className='flex flex-row gap-6 text-zinc-200'>
            <a href="#">Home</a>
            <a href="#">Contacto</a>
            <a href="#proyectos">Proyecto</a>
            <a href="">Redes</a>
          </nav>
        </header>
        <section className='w-full mx-auto lg:w-[740px] py-44'>
          <div className=''>
            <h1 className='text-5xl bold flex flex-row gap-x-4 pb-4'>Hola!!, Soy Osctechh <a
              href='https://www.linkedin.com/in/alexis-oscar-diaz-65279b268/'
              target='_blank'
              rel='noopener'
              className='flex flex-row items-center'><Badge /></a></h1>
            <h2 className='flex flex-row text-xl text-left'>Mi nombre es Alexis Diaz. Tengo conocimiento en desarrollo de aplicaciones y pagina WEB, mi experiencia fue adquirida en cursos de programacion,
              como asi tambien en crear proyectos reales.</h2>
          </div>
          <ul className='flex gap-x-2 mt-8'>
            <li className='rounded-full border border-white/10 justify-center items-center gap-x-2 py-1 px-1 bg-white/5 hover:scale-110 hover:bg-white/10 transition'>
              <a className='flex justify-center items-center' href="https://www.linkedin.com/in/alexis-oscar-diaz-65279b268/"
                target='_blank'
                rel='noopener noreferrer'>
                <LinkenIn />
                Linkedin
              </a>
            </li>
            <li className='rounded-full border border-white/10 justify-center items-center gap-x-2 py-1 px-1 bg-white/5 hover:scale-110 hover:bg-white/10 transition'>
              <a className='flex justify-center items-center' href=""
                target='_blank'
                rel='noopener noreferrer'>
                <GitHub />
                GitHub
              </a>
            </li>
            <li className='rounded-full border border-white/10 justify-center items-center gap-x-2 py-1 px-1 bg-white/5 hover:scale-110 hover:bg-white/10 transition'>
              <a className='flex justify-center items-center' href="">
                <Email />
                oscarcabj94@gmail.com
              </a>
            </li>
          </ul>

        </section>

        <section className='flex flex-col mx-auto mb-5 w-full lg:w-[740px]'>
          <div className='flex '>
            <CodeIcons />
            <h1 id='proyectos' className='flex text-3xl mb-4 ml-6'>Proyectos</h1>
          </div>
          <ProjectWindows />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
