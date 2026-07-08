import api from "./api";

export const getCertificates = async () => {
  const response = await api.get(
    process.env.REACT_APP_PARSE_CERTIFICATE_ENDPOINT
  );

  return response.data.results;
};