const baseUrl= process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
export const serverMutation=async(path:string,data:object)=>{
const url=`${baseUrl}${path}`;
const response=await fetch(url,{
  method:"POST",
  headers:{ 
    "Content-Type": "application/json"
  },
  body:JSON.stringify(data)
});
const result=await response.json();
return result;    
}