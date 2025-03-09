import axios from "axios";

export async function FetchData(setdata: any) {
  try {
    const information = await axios.get("https://restcountries.com/v3.1/all");
    setdata(information.data);
  } catch (error) {
    console.log(error);
  }
}
