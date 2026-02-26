import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const albumsDirectory = path.join(process.cwd(), "components/albums");

export type AlbumData = {
  albumId: string;
  heading: string;
  subheading: string;
  albumTitle: string;
  albumArtist: string;
  albumYear: string;
  imagesrc: string;
  color1: string;
  color2: string;
  color3: string;
  albumImages: string[];
  albumNames: string[];
  marqueeText: string;
  authorNote: string;
  text: string;
};

export async function getAlbum(filename: string): Promise<AlbumData> {
  const fullPath = path.join(albumsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  // Convert markdown body to HTML
  const contentHtml = await remark()
    .use(html)
    .process(content);

    return {
    ...data,
    text: contentHtml.toString(),
  } as AlbumData;
}