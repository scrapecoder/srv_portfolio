import Profilepic from '../assets/profile-pic.png'
import rn from '../assets/RN.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import node from '../assets/nodejs.png'
import { TiDownload } from 'react-icons/ti'

const IMAGE_SIZE = 180

// Define the prop type for each component
type SectionProps = {
    sectionRef: React.RefObject<HTMLDivElement>;
};

const Aboutme: React.FC<SectionProps> = ({ sectionRef }) => {
    return (
        <div ref={sectionRef} className="w-full justify-center text-center sm:py-2 md:py-10">
            <h4 className="text-gray-400 font-semibold text-xs mt-2">MY BIO</h4>
            <h4 className="text-white font-sans font-semibold text-xl">About <span className="text-cyan-500">me.</span></h4>
            <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 items-center justify-center mt-4 px-[10%] lg:px-[20%]">
                <div className="flex md:w-1/2 w-full items-center justify-center lg:items-start lg:justify-center">
                    <div
                        className="flex relative rounded-full border-1 border-x-gray-800 items-center justify-center"
                        style={{ width: `${IMAGE_SIZE + 100}px`, height: `${IMAGE_SIZE + 100}px` }}
                    >
                        <img className='absolute top-[0px] rounded-full bg-stone-50 right-[40px]' src={rn} width={'50px'} height={'50px'} alt="React Image" />
                        <img className='absolute top-[60px] rounded-full left-[10px]' src={js} width={'40px'} height={'40px'} alt="React Image" />
                        <img className='absolute bottom-[20px] rounded-full bg-white right-[40px]' src={html} width={'30px'} height={'30px'} alt="React Image" />
                        <img className='absolute bottom-[20px] rounded-full left-[40px]' src={node} width={'40px'} height={'40px'} alt="React Image" />
                        <div
                            className="flex rounded-full border-1 border-y-gray-800 justify-center items-center"
                            style={{ width: `${IMAGE_SIZE + 60}px`, height: `${IMAGE_SIZE + 60}px` }}
                        >

                            <div
                                className="rounded-full overflow-hidden"
                                style={{ width: `${IMAGE_SIZE + 20}px`, height: `${IMAGE_SIZE + 20}px`, backgroundImage: `url(${Profilepic})`, backgroundSize: 'cover' }}
                            >

                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex-col md:w-1/2 w-full space-y-2 lg:space-y-4 items-center justify-center lg:items-start lg:justify-start">
                    <p className='text-stone-400 font-sans text-[12px] text-start'>With over 7 years of experience in mobile application development using React Native, I have successfully delivered 10 to 12 complex projects across various industries. I specialize in building high-performance, scalable apps that solve real-world problems. My technical expertise includes JavaScript, TypeScript, Firebase, SwiftUI, and native app development, allowing me to build robust, cross-platform solutions.</p>
                    <p className='text-stone-400 font-sans text-[12px] text-start'>I have worked on a diverse range of apps, from social platforms and dating applications to government-backed utilities and health-focused products. My deep understanding of state management using Redux, API integrations, and UI/UX best practices has helped me craft seamless user experiences.</p>

                    <p className='text-stone-400 font-sans text-[12px] text-start'>I take pride in leading projects, managing client communications effectively, and consistently delivering results that meet both technical and business requirements. Whether it's enhancing an existing system or architecting a new mobile solution from scratch, I am committed to driving project success and delivering value.</p>
                
                <div className='flex justify-start'>
                    <a className='inline-flex  flex-row bg-cyan-500 mt-4 py-2 px-2 items-center justify-center rounded-sm'
                       target='_blank'  href="https://drive.google.com/file/d/1sb85gs-oj6a3v-andXSyU1yjGsWdDGDp/view?usp=sharing"
                    >
                        <h4 className='bg-cyan-500 p-0 text-slate-950'>View Resume</h4>
                        <TiDownload className='ml-1 text-slate-950' />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;