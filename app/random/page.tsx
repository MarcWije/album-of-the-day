export const dynamic = "force-dynamic";

import AlbumPage from '@/components/AlbumPage';
import { randomAlbum } from '@/lib/getAlbums';

export default async function Home() {
  const album = await randomAlbum();
  return (
    <AlbumPage
      album = {album}
    />
  );
}