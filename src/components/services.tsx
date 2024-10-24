
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices,MdOutlineIntegrationInstructions } from "react-icons/md";


const Services = () => {

    const Seperator = () => {
        return <div className="w-24 border-t bg-gray-500 my-2" />
    }
    return <div className="w-full justify-center text-center py-10">
        <h4 className="text-gray-400 font-semibold text-xs">SERVICES</h4>
        <h4 className="text-white font-sans font-semibold text-xl">What <span className="text-cyan-500">i do.</span></h4>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center justify-center mt-4">
            <div className="relative group h-52 w-60 border-1 rounded-md shadow-lg bg-gray-900 border-cyan-500 hover:bg-cyan-500 px-4 py-8">
                <div className="absolute top-2 text-gray-800 right-2 font-sans font-bold text-3xl">01</div>
                <FaCode className="group-hover:text-gray-900 size-5 md:text-stone-300"/>
                <h2 className="group-hover:text-gray-900 md:text-stone-300 text-start font-semibold font-sans sm:text-sm mt-2  md:text-md lg:text-md">Mobile App Development</h2>
                <Seperator />
                <p className="group-hover:text-gray-900 md:text-stone-300 font-normal text-xs text-start">I develop robust, scalable mobile applications using React Native. I leverage cross-platform tools to deliver native experiences for both Android and iOS.</p>
            </div>

            <div className="relative group h-52 w-60 border-1 rounded-md shadow-lg bg-gray-900 border-cyan-500 hover:bg-cyan-500 px-4 py-8">
            <div className="absolute top-2 text-gray-800 right-2 font-sans font-bold text-3xl">02</div>
                <MdOutlineIntegrationInstructions className="group-hover:text-gray-900 size-5 md:text-stone-300"/>
                <h2 className="group-hover:text-gray-900 md:text-stone-300 text-start font-semibold font-sans sm:text-sm mt-2  md:text-md lg:text-md">Backend Integration</h2>
                <Seperator />
                <p className="group-hover:text-gray-900 md:text-stone-300 text-xs text-start">I specialize in integrating mobile apps with powerful backend solutions like Firebase and REST APIs, ensuring seamless data flow and performance.</p>
            </div>

            <div className="relative group h-52 w-60 border-1 rounded-md shadow-lg bg-gray-900 border-cyan-500 hover:bg-cyan-500 px-4 py-8">
            <div className="absolute top-2 text-gray-800 right-2 font-sans font-bold text-3xl">03</div>
                <MdOutlineDesignServices className="group-hover:text-gray-900 size-5 md:text-stone-300"/>
                <h2 className="group-hover:text-gray-900 md:text-stone-300 text-start font-semibold font-sans sm:text-sm mt-2  md:text-md lg:text-md">UI/UX Design</h2>
                <Seperator />
                <p className="group-hover:text-gray-900 md:text-stone-300 text-xs text-start">Designing intuitive and engaging user interfaces that enhance the overall experience of mobile applications is my priority.</p>
            </div>
        </div>
    </div>

}

export default Services;