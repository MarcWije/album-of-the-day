import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import getMap from "./HashMap";

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
  funfact: string;
  location: string;
};

export async function getAlbum(filename: string): Promise<AlbumData> {
  const fullPath = path.join(albumsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = await remark()
    .use(html)
    .process(content);

    return {
    ...data,
    subheading: dateFormat(),
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

export function getDate(): string {
  const now = new Date();
  let day = now.getDate().toString()
  if (now.getDate() < 10){
    day = "0" + day;
  }
  let month = (now.getMonth() + 1).toString()
  if (now.getMonth() < 10){
    month = "0" + month;
  }
  const year = now.getFullYear().toString()
  let date: string =  day + month + year
  return date
}

export function dateFormat(): string {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const now = new Date()
  const date = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  const day = days[now.getDay()] 

  let dateSuf = ""
  if (date == 1 || date == 21 || date == 31){
    dateSuf = "st"
  } else if (date == 2 || date == 22){
    dateSuf = "nd"
  } else if (date == 3 || date == 23){
    dateSuf = "rd"
  } else {
    dateSuf = "th"
  }

  return day + ", " + date + dateSuf + " of " + month + ", " + year

}

export async function getTodaysAlbum(): Promise<AlbumData> {
  let date = getDate()
  console.log(date)
  let map : Map<string, string> = getMap()
  let id = map.get(date)
  console.log(map)
  console.log(id)
  if (!id){
    id = "octavarium.md"
  }
  return getAlbum(id)
}

export async function randomAlbum(): Promise<AlbumData>{
  let albums = new Map <number,string>()
  let count : number = 0
  fs.readdirSync(albumsDirectory).forEach(file =>{
    albums.set(count, file)
    count++
  });
  const random = Math.random()
  const rand2 = Math.trunc(random * 100 )
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
