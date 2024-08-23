export interface Image {
  id: string;
  urls: {
    regular: string;
    small?: string;
  };
  alt_description: string;
  description?: string;
  user: {
    instagram_username?: string;
    location?: string;
  };
  location?: {
    name: string;
  };
}
