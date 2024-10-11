export const arraySearch = (array: any, keyword: any) => {
  const searchTerm = keyword.toLowerCase()
  return array.filter((value: any) => {
    return value.name.toLowerCase().match(new RegExp(searchTerm, 'g'))
  })
}