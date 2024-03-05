import axios from "axios";
export default async function getjobs(query: string, page: number) {
  console.log(query);
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: query,
      page: page,
      num_pages: "1",
      //   date_posted: "today",
    },
    headers: {
      "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error(error);
  }
}
