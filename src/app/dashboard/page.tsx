import { auth } from '@/lib/auth';
import { User } from '@/type/user';
import { headers } from 'next/headers';
import Image from 'next/image';
// Gravity UI Icons for an arcade touch
import { Person, Envelope, Calendar, ShieldCheck, Gear } from '@gravity-ui/icons';

import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
    if (!session?.user) {
    redirect('/login'); 
  }
  
  const user:User = session?.user;
  
  // Format the JavaScript Date nicely for the UI
  const joinDate = user?.createdAt
    ? new Date(user?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'N/A';

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-red-950/40 via-neutral-900 to-transparent border border-red-500/20 rounded-2xl shadow-[0_0_15px_rgba(239,68,68,0.05)]">
        <h1 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
          Welcome back, <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">{user?.name || "Player 1"}</span>
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm font-mono mt-1">
          STATUS: ONLINE // ID: {user?.id || "UNKNOWN"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Profile Card Block --- */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
          
          {/* Avatar Container */}
          <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-red-500 to-orange-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] mb-4">
            <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 relative">
              <Image 
                src={user?.image || "https://images.unsplash.com/photo-1566492031773-4f4e44671857"} 
                alt={user?.name || "Avatar"} 
                fill
                className="object-cover"
                unoptimized // Useful if pulling directly from an unconfigured remote ibb domain
              />
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-wide">{user?.name}</h2>
          
          {/* Account Verification Badge */}
          <span className={`inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
            user?.emailVerified 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
              : 'bg-amber-500/10 text-green-700 border border-amber-500/30'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            {user?.emailVerified ? "Verified Player" : "Unverified Account"}
          </span>
        </div>

        {/* --- Account Data Details Block --- */}
        <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-lg font-bold font-mono tracking-wider uppercase text-neutral-300">Player Credentials</h3>
            <Gear className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Name Field */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800/60 flex items-center gap-4">
              <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500">
                <Person className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-wider">Display Name</p>
                <p className="text-sm font-medium text-neutral-200">{user?.name}</p>
              </div>
            </div>

            {/* Email Field */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800/60 flex items-center gap-4">
              <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500">
                <Envelope className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-medium text-neutral-200 truncate">{user?.email}</p>
              </div>
            </div>

            {/* Registration Date Field */}
            <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800/60 flex items-center gap-4 md:col-span-2">
              <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-wider">Player Since</p>
                <p className="text-sm font-medium text-neutral-200">{joinDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;