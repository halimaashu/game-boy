import { getData } from "../mutation/get"

export const allGems=async()=>{
return await  getData("/posts")
}