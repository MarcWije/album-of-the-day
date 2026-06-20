import AlbumPage from '@/components/AlbumPage';
import { getTodaysAlbum } from '@/lib/getAlbums';
import { getAllAlbums } from '@/lib/getAlbums';

export default async function Home() {
  const album = await getTodaysAlbum();
  const allAlbums = await getAllAlbums();
  return (
    <AlbumPage
      album = {album}
      allAlbums = {allAlbums}
    />
  );
}