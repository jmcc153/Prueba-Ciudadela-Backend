
const API_URL = 'https://rickandmortyapi.com/api/';

export const resolvers = {
  Query: {
    characters: async (_, {page}) => {
      try {
        const response = await fetch(`${API_URL}character?page=${page}`);
        const data = await response.json();
        return data.results;
      } catch (error) {
        throw new Error('Error fetching characters');
      }
    },
    info: async () => {
      try {
        const response = await fetch(`${API_URL}character`);
        const data = await response.json();
        return data.info;
      } catch (error) {
        throw new Error('Error fetching info');
      }
    },
  },
};