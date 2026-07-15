const baseUrl= process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
export const getData=async(path:string)=>{

    const url=`${baseUrl}${path}`
    const result= await  fetch(url)
    return result.json();
}