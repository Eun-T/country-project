import axios from "axios";

export const getCountry = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags",
    );
    return response;
  } catch (error) {
    console.log("error : ", error);
    // 에러 던져야됨
    throw error;
  }
};
