export default async function getjobs(query: string) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=2&num_pages=20`;
  const options = {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
  }
}
