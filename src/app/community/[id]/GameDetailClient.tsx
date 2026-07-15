"use client";

import React, { useState,  } from "react";
import { Card, Avatar, Button, Chip, } from "@heroui/react";

// Gravity UI Icon imports
import {
 
  Heart,
  HeartFill,
  
  Filmstrip,
  Layers,
  Comment as CommentIcon,
  ArrowLeft,
} from "@gravity-ui/icons";
import Image from "next/image";
import { Post } from "@/type/post";


interface GameDetailClientProps {
  initialData: Post;
}

export default function GameDetailClient({
  initialData,
}: GameDetailClientProps) {
  const [likes, setLikes] = useState(initialData.like);
  const [hasLiked, setHasLiked] = useState(false);

  // Search and Filter interactive states
 

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };


  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button
        
          className="text-white transition-colors"
          onPress={() => window.history.back()}
          
        ><ArrowLeft className="w-4 h-4" ></ArrowLeft>
          Back to feed
        </Button>
      </div>

      {/* Responsive Grid Split Layout */}
      <div className="flex justify-center items-center">
        {/* LEFT & CENTER PANEL: Detail Card */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-1 border-neutral-800 bg-neutral-900/60 backdrop-blur-md shadow-2xl overflow-hidden rounded-2xl">
            {/* Visual Thumbnail Frame */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden">
              <Image
                src={initialData.thumbnail}
                fill
                priority
                alt={initialData.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              {/* Category Floating Badges */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                <Chip size="sm" className="capitalize">
                  {initialData.category}
                </Chip>
                <Chip
                  size="sm"
                  color="warning"
                  className="capitalize text-white"
                >
                  {initialData.gameMode}
                </Chip>
              </div>
            </div>

            {/* FIXED: Reverted back to Card Anatomy Pattern */}
            <Card.Header className="px-6 pt-6 flex justify-between items-center flex-wrap gap-4 border-b border-neutral-800/80 pb-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image alt="John Doe" src={initialData.authorImage} />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <div>
                  <Card.Title className="font-semibold text-lg text-white leading-tight">
                    {initialData.authorName}
                  </Card.Title>
                  <Card.Description className="text-xs text-neutral-400">
                    {initialData.authorEmail}
                  </Card.Description>
                </div>
              </div>

            
             
            </Card.Header>

            {/* FIXED: Using Card.Content Layout structure */}
            <Card.Content className="p-6 space-y-6">
              <div>
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                  {initialData.title}
                </h1>
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
                  {initialData.description}
                </p>
              </div>

              {/* Meta Tags Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-neutral-950/40 border border-neutral-800 px-4 py-2 rounded-xl">
                  <Filmstrip className="text-secondary w-4 h-4" />
                  <span className="text-xs text-neutral-400">Game:</span>
                  <span className="text-xs font-semibold text-white uppercase">
                    {initialData.game}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-neutral-950/40 border border-neutral-800 px-4 py-2 rounded-xl">
                  <Layers className="text-secondary w-4 h-4" />
                  <span className="text-xs text-neutral-400">Platform:</span>
                  <span className="text-xs font-semibold text-white uppercase">
                    {initialData.platform}
                  </span>
                </div>

                <Chip className="border-neutral-800 text-neutral-300">
                  {initialData.tags}
                </Chip>
              </div>
            </Card.Content>

            {/* FIXED: Using Card.Footer Layout structure */}
            <Card.Footer className="px-6 py-4 bg-neutral-950/40 border-t border-neutral-800/80 flex justify-between items-center">
              <Button
              
                onPress={handleLike}
                startContent={
                  hasLiked ? (
                    <HeartFill className="w-4 h-4 text-white" />
                  ) : (
                    <Heart className="w-4 h-4 text-secondary" />
                  )
                }
                className="font-medium"
              >
                {likes} Likes
              </Button>

              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <CommentIcon className="w-4 h-4" />
                <span>{initialData.comment.length} Comments</span>
              </div>
            </Card.Footer>
          </Card>
        </div>

      
      
      </div>
    </div>
  );
}
