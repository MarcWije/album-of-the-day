import AlbumPage from '@/components/AlbumPage';
import { getAlbum } from '@/lib/getAlbums';
import { getAllAlbums } from '@/lib/getAlbums';

export default async function Home({ 
  params 
} : {
  params : { id : string }; 
}) {
  const { id } = await params
  const album = await getAlbum(`${id}.md`);
  const allAlbums = await getAllAlbums();

  return (
    <AlbumPage
      album = {album}
      allAlbums = {allAlbums}
      />
  );
}
