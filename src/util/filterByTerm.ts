type ResultSearch = {
  id: number;
  name: string;
}

export function filterByTerm(inputArr: ResultSearch[], searchTerm: string) {
  const regex = new RegExp(searchTerm, "i")
  return inputArr.filter( item => item.name.match(regex))
}