import GamePostCard from '@/components/comunity/GamePostCard';
import { allGems } from '@/lib/actions/api/getAllGems';
import { Post } from '@/type/post';
import React from 'react';

const CommunityPage =async () => {
    const posts:Post[]=await allGems()
    // console.log(posts,"//////////////////////////")

    return (
        <div className=' bg-black text-white'>
            <h1 className='text-2xl font-black text-center p-4 mb-7'>This is Community post pages</h1>

            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">{
                posts.map((post)=> <GamePostCard key={post?._id} post={post}/>)
                }</div>
        </div>
    );
};

export default CommunityPage;