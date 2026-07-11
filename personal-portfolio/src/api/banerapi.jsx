import api from "./api";

export const getBanner = async () => {
  const response = await api.get(
    process.env.REACT_APP_PARSE_BANNER_ENDPOINT
  );

  return response.data.results;
};