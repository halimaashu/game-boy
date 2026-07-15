import { getData } from "../mutation/get"

export const allGems=async()=>{
return await  getData("/posts")
}

export const games=async(id:string)=>{
    return await getData(`/posts/${id}`)
}