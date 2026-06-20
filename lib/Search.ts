import Fuse from "fuse.js";
import { AlbumData } from "./getAlbums";

export function createSearch(albums: AlbumData[]) {
  return new Fuse(albums, {
    keys: [
      { name: "albumTitle", weight: 0.4 },
      { name: "albumArtist", weight: 0.35 },
      { name: "genre", weight: 0.15 },
      { name: "albumYear", weight: 0.1 },
    ],
    threshold: 0.35,
    includeScore: true,
  });
}

export function searchAlbums(albums: AlbumData[], query: string): AlbumData[] {
  if (!query.trim()) return [];
  const fuse = createSearch(albums);
  return fuse.search(query).map((r) => r.item);
}