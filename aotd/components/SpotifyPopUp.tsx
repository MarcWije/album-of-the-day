'use client'

import { useState } from "react";
import { belanosima } from '@/app/ui/fonts';
import { FaSpotify } from "react-icons/fa";

interface SpotifyPopupProps {
  albumId: string;
}

export default function SpotifyPopup({ albumId }: SpotifyPopupProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`${belanosima.className} fixed bottom-4 right-4 bg-black text-green-600 px-4 py-2 rounded shadow-lg z-50 flex items-center gap-2`}
        >
          <FaSpotify size={20} /> Play Album
        </button>
      )}

      {open && (
        <div className="fixed bottom-4 right-4 w-[320px] h-100 z-50 shadow-lg rounded overflow-hidden flex flex-col bg-gray-900">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-1 left-1/2 -translate-x-1/2 text-white text-xl font-bold z-50"
          >
            ×
          </button>

          <iframe
            src={`https://open.spotify.com/embed/album/${albumId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded"
          ></iframe>
        </div>
      )}
    </>
  );
}