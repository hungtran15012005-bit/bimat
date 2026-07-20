import { Edition, Platform, Character } from './types';

export const EDITIONS: Edition[] = [
  {
    id: 'standard',
    name: 'Standard Edition',
    price: '$69.99',
    subtitle: 'GRAND THEFT AUTO VI',
    description: 'Experience the next level of immersive open-world crime drama in Vice City and beyond.',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_tablet.02g1-9rnvku2p.jpg',
    features: [
      'Grand Theft Auto VI Base Game',
      'Pre-order Bonus: Vintage Vice City Pack'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ultimate Edition',
    price: '$99.99',
    subtitle: 'ULTIMATE EDITION',
    description: 'An exclusive collection of items threaded across all aspects of Jason and Lucia’s story.',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_tablet.02g1-9rnvku2p.jpg',
    features: [
      'Grand Theft Auto VI Base Game',
      'Pre-order Bonus: Vintage Vice City Pack',
      'Exclusive Lucia Story Outfit Collection',
      'Exclusive Jason Story Outfit Collection',
      'Vice City Retro Custom Vehicle Pack',
      'Special Custom Weapon Skins & Mastery Booster'
    ]
  }
];

export const PLATFORMS: Platform[] = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    icon: 'ps5',
    releaseDate: 'November 19, 2026'
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    icon: 'xbox',
    releaseDate: 'November 19, 2026'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'lucia',
    name: 'Lucia',
    role: 'Female Protagonist',
    actor: 'Manni L. Perez',
    quote: '"The only way we are getting through this, is by sticking together. Being a team."',
    bio: 'Lucia is a fierce, street-smart survivor whose criminal past has caught up with her. After spending time in a Leonida state correctional facility, she is determined to make her mark on Vice City, partnering with Jason in a series of high-stakes robberies that will put their trust to the ultimate test.',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_02_ultrawide.09dke7w7_v~z_.jpg'
  },
  {
    id: 'jason',
    name: 'Jason',
    role: 'Male Protagonist',
    actor: 'Dylan Rourke',
    quote: '"Trust. Right?"',
    bio: 'Jason is a calculated tactician and skilled driver who knows how to keep his cool in high-pressure situations. Drawn to Lucia’s wild ambition, Jason is willing to ride or die through Vice City’s sun-drenched streets and swampy bayous, finding themselves in a conspiracy stretching across Leonida.',
    image: 'https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01_With_Logos_landscape.04a3h9o2l4tmn.jpg'
  }
];
