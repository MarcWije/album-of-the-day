import AlbumPage from '@/components/AlbumPage';
import { getTodaysAlbum } from '@/lib/getAlbums';

export default async function Home() {
  const album = await getTodaysAlbum();
  return (
    
    <AlbumPage
      album = {album}
    />
  );
}