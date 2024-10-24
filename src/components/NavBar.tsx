import { TiDownload } from "react-icons/ti";

export default function NavBar() {
    return (
        <div className='w-full bg-slate-950  sm:px-6 mid:px-20'>
            <div className='flex justify-center items-center'>
                <div className='mid:w-60 sm:mr-4 mid:mr-10'>
                    <h2 className='text-white font-semibold font-sans'>Sourav</h2>
                </div>
                <div className="flex flex-row flex-1 w-full space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-20 items-center justify-end">
                    <a href="#">
                        <span className="text-white font-normal text-sm hover:text-sky-700 font-sans">Home</span>
                    </a>
                    <a href="#">
                        <span className="text-white font-normal text-sm hover:text-sky-700 active:text-sky-700 font-sans">Featured projects</span>
                    </a>
                    <a href="#">
                        <span className="text-white font-normal text-sm hover:text-sky-700 active:text-sky-700 font-sans">About me</span>
                    </a>
                    <a href="#">
                        <span className="text-white font-normal text-sm hover:text-sky-700 active:text-sky-700 font-sans">Contact me</span>
                    </a>
                </div>

                <div className='flex-initial sm:mx-4 md:mx-10'>
                    <div className=' flex flex-row bg-cyan-500 py-1 px-2 items-center justify-center rounded-sm'>
                        <button className='bg-cyan-500 p-0 text-slate-950' onClick={() => {

                        }}>View Resume</button>
                        <TiDownload className='ml-1' />
                    </div>
                </div>
            </div>
        </div>
    )
}
