import { games } from "@/lib/actions/api/getAllGems";
import GameDetailClient from "./GameDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GamePostDetailPage({ params }: PageProps) {
  const { id } = await params;
  const gameData = await games(id);

  if (!gameData) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white bg-neutral-950">
        <p className="text-xl font-semibold">Game detail not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500/30">
      <GameDetailClient initialData={gameData} />
    </main>
  );
}