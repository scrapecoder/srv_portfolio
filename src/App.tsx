import NavBar from './components/NavBar'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import bgcover from './assets/bg-cover.png'
import Services from './components/services';
import Projects from './components/projects';


const SocialLink = () => {
  let className = 'text-slate-950 size-4'
  return <div className='flex justify-center items-center space-x-6 sm:mt-6 md:mt-10'>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <FaGithub {...{ className }} />
      </div>
    </a>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <FaLinkedin {...{ className }} />
      </div>
    </a>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <BiLogoGmail {...{ className }} />
      </div>
    </a>
  </div>
}
function App() {
  return (
    <div>
      <div className='relative bg-slate-950 py-10 overflow-hidden' >
        <div className='absolute bottom-0 top-0 left-0 right-0 -rotate-2' style={{backgroundImage:`url(${bgcover})`, backgroundSize:'cover', opacity:0.08}}/>
      <NavBar />
      <div className='flex flex-col mt-20 items-center justify-center w-full sm:px-8 md:px-24 lg:px-56'>
        <h3 className='text-white font-sans font-semibold text-2xl sm:text-center'>Hi, I am <span className='text-cyan-500'>Sourav kukreti</span></h3>
        <p className='text-gray-400 font-sans font-medium text-md text-center sm:px-8 md:px-20'>I am a <span className='text-cyan-500'>Senior React Native Developer</span> with 7 years of experience in building high-quality mobile applications. My expertise includes React Native, Firebase, TypeScript, and JavaScript. I excel in client communication and project leadership, ensuring seamless project delivery.</p>
      </div>

      <SocialLink />
    </div>

    <Services/>
    <Projects/>
    </div>
  )
}

export default App
