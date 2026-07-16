import GamePostCard from "@/components/comunity/GamePostCard";
import SearchAndFilter from "@/components/SearchAndFilter";

import { allGems } from "@/lib/actions/api/getAllGems";
import { Post } from "@/type/post";
import React from "react";

// It's a good practice to type searchParams properly in Next.js
interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

const CommunityPage = async ({ searchParams }: PageProps) => {
  const { search } = await searchParams;
  const posts: Post[] = await allGems(search);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl font-black text-center p-4 mb-2 tracking-wide bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
        COMMUNITY POSTS
      </h1>

      {/* The UI Input element handles updating URL strings */}
      <SearchAndFilter />

      {posts?.length === 0 ? (
        <div className="text-center text-zinc-500 my-12">
          No posts found for {search}. Try searching for something else!
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {posts.map((post) => (
            <GamePostCard key={post?._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityPage;