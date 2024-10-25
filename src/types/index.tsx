export type projectType = {
    id:number,
    name:string,
    tech:string[],
    shortdes:string,
    github:string,
    image:string,
    link?:string
}

export type dataType = {
    data:projectType[]
}