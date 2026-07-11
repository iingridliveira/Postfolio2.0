import api from "./api";

export const getSkills = async () => {
  const response = await api.get(
    process.env.REACT_APP_PARSE_SKILLS_ENDPOINT
  );

  return response.data.results;
};