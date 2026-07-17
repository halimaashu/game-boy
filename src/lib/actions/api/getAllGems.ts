import { getData } from "../mutation/get"

export const allGems=async(search?:string|undefined)=>{
    if(search){
       return await  getData(`/posts?search=${search}`) 
    }
return await  getData("/posts")
}

export const games=async(id:string)=>{
    return await getData(`/posts/${id}`)
}

export const Mypost=async(name:string,email:string)=>{
    if(!name || !email){
        return
    }
return getData(`/myPost?authorName=${name}&?authorEmail=${email}`)
}