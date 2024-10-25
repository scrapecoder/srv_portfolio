import { projectType } from "../types";



const Chip = ({ data }: { data: string[] }) => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar space-x-3 my-3">
            {data.map((tech, index) => <div className="flex bg-gray-700 px-2 rounded-xl py-1 shadow-sm text-center justify-center items-center whitespace-nowrap" key={index}><p className="text-stone-300 font-medium text-[10px]">{tech}</p></div>)}
        </div>
    )
}

export default function Projectcard({ projectData, index }: { projectData: projectType, index: number }) {
    const isEven = index % 2 == 0;
    return (
        <div
            className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } w-full py-4 md:py-10 items-center px-[5%] md:px-[10%] lg:px-[20%]`}>
            <div className="md:w-1/2 w-full items-start md:items-end md:justify-end justify-start text-start md:text-end mt-4 ml-2 mid:mt-0">
                <h2 className="text-stone-300 font-sans font-semibold">{projectData.name}</h2>
                <Chip data={projectData.tech} />
                <p className="text-stone-500 font-sans font-medium md:w-full w-full text-[12px]">{projectData.shortdes}</p>
                {projectData?.github && <div className="my-2">
                    <button onClick={() => {
                         window.open(projectData.github, "_blank") 
                    }} className="text-stone-300 rounded-md bg-red-500 py-1 px-4 text-[12px]">Github</button>
                </div>}
            </div>

            <div
                className={`md:w-1/2 w-full flex justify-center items-center  relative mt-2 ${isEven ? "md:justify-end" : "md:justify-start"
                    } ${isEven ? "md:items-end" : "md:items-start"}`}
            >
                <div className="rounded-sm h-40 md:w-80 w-60 border-3 border-gray-600" />
                <div
                    className={`absolute left-10 top-3  ${isEven ? "md:right-3 md:left-auto" : "md:left-3 md:right-auto"
                        } h-40 md:w-80 w-60 opacity-70`}
                    style={{ backgroundImage: `url(${projectData.image})`, backgroundSize: "contain" }}
                />
            </div>


        </div>
    )
}
