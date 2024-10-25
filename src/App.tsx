import NavBar from './components/NavBar'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import bgcover from './assets/bg-cover.png'
import Services from './components/services';
import Projects from './components/projects';
import Aboutme from './components/aboutme';
import Contact from './components/contact';
import { useRef } from 'react';


const SocialLink = () => {
  let className = 'text-slate-950 size-4'
  const sendEmail = () => {
    const email = 'souravkukreti84@gmail.com';
    const subject = '';
    const body = '';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

  return <div className='relative z-10 flex justify-center items-center space-x-6 sm:mt-6 md:mt-10'>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <a href='https://github.com/scrapecoder' target="_blank"><FaGithub {...{ className }} /></a>
      </div>
    </a>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <a href='https://www.linkedin.com/in/sourav-kukreti-38b827172' target='_blank'><FaLinkedin {...{ className }} /></a>
      </div>
    </a>
    <a>
      <div className='rounded-full p-2 flex bg-slate-200 items-center justify-center'>
        <a href='#' onClick={sendEmail}><BiLogoGmail {...{ className }} /></a>
      </div>
    </a>
  </div>
}
function App() {

  // Define refs for each section
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Scroll to a specific section
  const scrollToSection = (navIndex: number) => {
    if (navIndex === 1) { }
    else if (navIndex == 2) {
      section1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (navIndex == 3) {
      section2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (navIndex == 4) {
      section3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div>
      <div className='relative bg-slate-950 py-10 overflow-hidden' >
        <div className='absolute bottom-0 top-0 left-0 right-0 -rotate-2' style={{ backgroundImage: `url(${bgcover})`, backgroundSize: 'cover', opacity: 0.08 }} />
        <div className="relative z-10"> 
                <NavBar scrollToSection={scrollToSection} />
            </div>
        <div className='flex flex-col mt-20 items-center justify-center w-full sm:px-8 md:px-24 lg:px-56'>
          <h3 className='text-white font-sans font-semibold text-2xl sm:text-center'>Hi, I am <span className='text-cyan-500'>Sourav kukreti</span></h3>
          <p className='text-gray-400 font-sans font-medium text-md text-center sm:px-8 md:px-20'>I am a <span className='text-cyan-500'>Senior React Native Developer</span> with 7 years of experience in building high-quality mobile applications. My expertise includes React Native, Firebase, TypeScript, and JavaScript. I excel in client communication and project leadership, ensuring seamless project delivery.</p>
        </div>

        <SocialLink />
      </div>

      <Services />
      <Projects sectionRef= {section1Ref} />
      <Aboutme sectionRef= {section2Ref} />
      <Contact sectionRef= {section3Ref} />
    </div>
  )
}

export default App
