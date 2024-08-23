import axios from 'axios';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description?: string;
  user: {
    instagram_username?: string;
    location?: string;
  };
}

interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}

const getImages = async (query: string, page: number): Promise<UnsplashResponse> => {
  const res = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 6,
      client_id: "wgQYQmTP2P2fak55_dmG-lrZF9fAU-cLvea-l11POTI",
    },
  });
  return res.data;
};

export default getImages;

