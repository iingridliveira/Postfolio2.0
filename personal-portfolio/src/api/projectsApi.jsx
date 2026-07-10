import api from "./api";

export const getProjects = async () => {
  const response = await api.get(
    process.env.REACT_APP_PARSE_PROJECTS_ENDPOINT
  );

  return response.data.results;
};