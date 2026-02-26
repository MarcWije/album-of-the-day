import AlbumPage from '@/components/AlbumPage';
import { getAlbum, getAllAlbums } from '@/lib/getAlbums';

export default async function Home() {
    const albums = await getAllAlbums()

    const now = new Date();
    const day = now.getDate().toString()
    let month = (now.getMonth() + 1).toString()
    if (now.getMonth() < 10){
      month = "0" + month;
    }
    const year = now.getFullYear().toString()
    let date: string =  day + month + year
    let id = ""
    albums.forEach ( (album) => {
      if (album.date === date){
        id = album.filename
      }
    })

  const album = await getAlbum(id);

  return (
    <AlbumPage
      album = {album}
    />
  );
}