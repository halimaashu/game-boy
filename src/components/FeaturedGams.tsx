import { allGems } from "@/lib/actions/api/getAllGems";
import { Post } from "@/type/post";
import GamePostCard from "./comunity/GamePostCard";
// If you want to use a retro icon for the header:
import { LayoutRows } from "@gravity-ui/icons";
import Link from "next/link";
import { Button } from "@heroui/react";

const FeaturedGams = async () => {
  // Fetch all posts/gems
  const posts: Post[] = await allGems();
  
  // Slice to only show the top 6 or 7 featured items
  const featuredPosts = posts.slice(0, 6);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* --- Section Header --- */}
      <div className="flex flex-col items-center text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-mono font-bold tracking-widest uppercase">
          <LayoutRows className="w-4 h-4 animate-bounce" />
          Must-Play Hits
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
          Featured <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Gems</span>
        </h2>
        
        <p className="text-neutral-400 text-sm md:text-base max-w-md font-medium">
          Handpicked high-score titles and hidden masterworks you absolutely cannot miss.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
      </div>

      {/* --- Responsive Grid Layout --- */}
      {featuredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredPosts.map((post) => (
            <div 
              key={post._id} 
              className="transform hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <GamePostCard post={post} />
            </div>
          ))}
          <Link className="text-white mt-5" href={"/community"}>
          <Button variant="danger">
            Browse All game
          </Button>
          </Link>
        </div>
      ) : (
        /* --- Empty State --- */
        <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/50">
          <p className="text-neutral-500 font-mono text-sm">No featured gems found at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default FeaturedGams;