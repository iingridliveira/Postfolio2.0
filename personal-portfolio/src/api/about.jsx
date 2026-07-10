import api from "./api";

export const getAboutInfo = async () => {
  const response = await api.get(
    process.env.REACT_APP_PARSE_ABOUT_ENDPOINT
  );

  return response.data.results;
};