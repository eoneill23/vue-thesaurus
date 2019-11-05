export const getSynonyms = async word => {
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.VUE_APP_API_KEY}`)
  if (!response.ok) {
    throw Error(`There was an issue searching for synonyms for ${word}`)
  }
  const data = await response.json()
  return data
}