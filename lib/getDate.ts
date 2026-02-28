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
