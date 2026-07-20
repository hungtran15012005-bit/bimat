export interface Edition {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  releaseDate: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  actor: string;
  quote: string;
  bio: string;
  image: string;
}
