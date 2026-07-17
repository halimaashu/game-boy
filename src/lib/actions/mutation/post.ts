
import { authClient } from "@/lib/auth-client";

const baseUrl= process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
export const serverMutation=async(path:string,data:object)=>{
  const {data:tokenData}=await authClient.token()


const url=`${baseUrl}${path}`;
const response=await fetch(url,{
  method:"POST",
  headers:{ 
    "Content-Type": "application/json",
    authorization:`Bearer ${tokenData?.token}`
  },
  body:JSON.stringify(data)
});
const result=await response.json();
return result;    
}