import axios from "axios";

export const authApi = async (data) => {
  const url = "https://httpbin.org/post"; 
 
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        "X-Status": "Awesome",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log("error:", error);
  }
};
