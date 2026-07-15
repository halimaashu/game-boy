import { serverMutation } from "./mutation/post"


export const postCommunityPost=async(data)=>{
    return await serverMutation("/community-posts",data)
}