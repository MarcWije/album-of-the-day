import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Rand, { PRNG } from 'rand-seed';
import { error } from "console";

const albumsDirectory = path.join(process.cwd(), "components/albums");

export type AlbumData = {
  filename: string;
  albumId: string;
  heading: string;
  subheading: string;
  date: string;
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

export function getDate(): string {
  const now = new Date();
  const day = now.getDate().toString()
  let month = (now.getMonth() + 1).toString()
  if (now.getMonth() < 10){
    month = "0" + month;
  }
  const year = now.getFullYear().toString()
  let date: string =  day + month + year

  return date
}

export async function getAlbum(filename: string): Promise<AlbumData> {
  const fullPath = path.join(albumsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = await remark()
    .use(html)
    .process(content);

    return {
    ...data,
    text: contentHtml.toString(),
    } as AlbumData;
}

export async function getAllAlbums(): Promise<AlbumData[]> {
  
  let albums: AlbumData[] = []
  fs.readdirSync(albumsDirectory).forEach(async file =>{
    const fullPath = path.join(albumsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents);
    const contentHtml = await remark()
    .use(html)
    .process(content);

    albums.push({
      ...data,
      text: contentHtml.toString(),
    } as AlbumData) 
  });
  return albums
}

export async function getTodaysAlbum(): Promise<AlbumData> {
  let date = getDate()
  let id = ""
  let album : AlbumData = null

  fs.readdirSync(albumsDirectory).forEach(async file =>{
    const fullPath = path.join(albumsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents);
    
    if(data.date === date){

      const contentHtml = await remark()
        .use(html)
        .process(content);

      album = {
        ...data,
        text: contentHtml.toString(),
      } as AlbumData;

    }
  });
  if (album) {
    return album;
  } else {
    return getAlbum("octavarium.md")
  }
}

export async function randomAlbum(): Promise<AlbumData>{
  let date = getDate()
  let albums = new Map <number,string>()
  let count : number = 0
  fs.readdirSync(albumsDirectory).forEach(file =>{
    albums.set(count, file)
    count++
  });
  const random = new Rand(date)
  const rand2 = Math.trunc(random.next() * 100 )
  const filename = albums.get(rand2 % albums.size);
  if (!filename){
    throw new Error("Random album selection failed")
  }
  const fullPath = path.join(albumsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = await remark()
    .use(html)
    .process(content);

    return {
    ...data,
    text: contentHtml.toString(),
    } as AlbumData;
}
