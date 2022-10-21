const apiKey = import.meta.env.VITE_API_KEY;

const api = {
  games: {
    getCatalogOffer: async (): Promise<any> => {   
      const request = await fetch('src/data/catalogOffer')
      return await request.json()
    },  
    
  },
};

export default api;
