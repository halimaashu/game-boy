"use client"
import { Post } from "@/type/post";
import { Card } from "@heroui/react";
import Image from "next/image";
// Importing some relevant icons from Gravity UI
import { Heart, Comment, Display, Dice1 } from "@gravity-ui/icons";
import Link from "next/link";

interface Props {
  post: Post;
}

const GamePostCard = ({ post }: Props) => {
    // console.log(post.thumbnail,"fro kkkkkkkkkkkkkkk")
  if (!post) return null;

  // Format date nicely
  const formattedDate = new Date(post.createAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 text-white shadow-xl transition-all duration-300 hover:border-violet-500 hover:shadow-violet-500/10">
      {/* 1. Card Header: Author Profile & Game Badges */}
      <Card.Header className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
            <Image
              src={post.authorImage}
              alt={post.authorName}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <Card.Title className="text-sm font-semibold text-zinc-100">
              {post.authorName ||"/https//:demo "}
            </Card.Title>
            <Card.Description className="text-xs text-zinc-400">
              {formattedDate}
            </Card.Description>
          </div>
        </div>
        
        {/* Category Badge */}
        <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-violet-400 border border-violet-500/20">
          {post.category}
        </span>
      </Card.Header>

      {/* 2. Thumbnail Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        <Image
          src={post?.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 450px"
        />
        {/* Floating Game Tag */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md border border-white/10">
            {post.game}
          </span>
        </div>
      </div>

      {/* 3. Card Content: Title & Details */}
      <Card.Content className="space-y-3 p-4">
        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold text-zinc-100 hover:text-violet-400 transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-zinc-400 leading-relaxed">
          {post.description}
        </p>

        {/* Game Meta Badges */}
        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          <span className="flex items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 py-1 text-zinc-300 border border-zinc-800">
            <Dice1 className="w-3.5 h-3.5 text-violet-400" />
            {post.gameMode}
          </span>
          <span className="flex items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 py-1 text-zinc-300 border border-zinc-800">
            <Display className="w-3.5 h-3.5 text-violet-400" />
            {post.platform}
          </span>
          {post.tags && (
            <span className="rounded-md bg-zinc-900 px-2.5 py-1 text-zinc-400 border border-zinc-800">
              #{post.tags}
            </span>
          )}
        </div>
      </Card.Content>

      {/* 4. Card Footer: Likes, Comments & Details CTA */}
      <Card.Footer className="flex items-center justify-between border-t border-zinc-900 bg-zinc-950/40 p-4">
        {/* Likes & Comments Counter */}
        <div className="flex items-center gap-4 text-zinc-400 text-sm">
          <div className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer">
            <Heart className="w-4 h-4" />
            <span>{post.like}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-violet-400 transition-colors cursor-pointer">
            <Comment className="w-4 h-4" />
            <span>{post.comment?.length || 0}</span>
          </div>
        </div>

        {/* Details CTA Button */}
      <Link href={`/community/${post?._id}`}>
        <button 
          onClick={() => console.log(`Navigating to post details: ${post.title}`)}
          className="rounded-lg bg-violet-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 active:scale-95 transition-all duration-200"
        >
          Details
        </button>
      </Link>
      </Card.Footer>
    </Card>
  );
};

export default GamePostCard;