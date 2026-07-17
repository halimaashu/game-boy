import PostModerationTable from "@/components/dashboard/PostModerationTable";
import { Mypost } from "@/lib/actions/api/getAllGems";
import { auth } from "@/lib/auth";
import { Post } from "@/type/post";
import { User } from "@/type/user";
import { headers } from "next/headers";


const page =async () => {
    const session=await auth.api.getSession({
        headers:await headers()
    })
    console.log(session)
    const user:User | null=session?.user;
    const {name,string}=user;
    const posts:Post= await Mypost(name,email)
    console.log(posts,"from manage post page")
    return (
        <div>
            <h1 className="text-white"> his is my game management pages</h1>
            <PostModerationTable posts ={posts}/>
        </div>
    );
};

export default page;