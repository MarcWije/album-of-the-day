"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { AlbumData } from "@/lib/getAlbums";
import { searchAlbums } from "@/lib/Search";
import { jost, rajdhani } from "@/app/ui/fonts";

interface SearchModalProps {
  albums: AlbumData[];
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ albums, isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const results = query.trim() ? searchAlbums(albums, query) : [];
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  function handleSelect(albumId: string) {
    router.push(`/${albumId}`);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-xl z-10"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-700 rounded-2xl px-4 py-3 shadow-2xl">
              <IoSearchOutline size={20} className="text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search albums, artists, genres…"
                className={`${jost.className} flex-1 bg-transparent text-white placeholder-zinc-500 text-base outline-none`}
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                  <IoCloseOutline size={20} />
                </button>
              )}
            </div>

            {/* Results */}
            <AnimatePresence>
              {results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="mt-2 bg-zinc-900/95 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {results.map((album, i) => (
                    <button
                      key={album.albumId}
                      onClick={() => handleSelect(album.albumId)}
                      className={`w-full flex items-center gap-4 px-4 py-3 hover:bg-zinc-800/80 transition-colors text-left ${
                        i !== results.length - 1 ? "border-b border-zinc-800" : ""
                      }`}
                    >
                      <Image
                        src={album.imagesrc}
                        alt={album.albumTitle}
                        width={44}
                        height={44}
                        className="rounded-md object-cover shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className={`${jost.className} text-white text-sm font-semibold truncate`}>
                          {album.albumTitle}
                        </span>
                        <span className={`${rajdhani.className} text-zinc-400 text-sm truncate`}>
                          {album.albumArtist} · {album.albumYear}
                        </span>
                      </div>
                      <span className={`${rajdhani.className} ml-auto text-xs text-zinc-500 shrink-0 italic`}>
                        {album.genre}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}

              {query.trim() && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${jost.className} mt-2 bg-zinc-900/95 border border-zinc-700 rounded-2xl px-4 py-6 text-center text-zinc-500 text-sm shadow-2xl`}
                >
                  No albums found for &ldquo;{query}&rdquo;
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}