import axios from "axios";

export const login = async ({ email, password }) => {
  const url = `http://192.168.200.14:8081/v1/api/auth/login`;
  console.log(email, password);
  const response = await axios.post(

    url,
    {
      email,
      password,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.metadata;
};
