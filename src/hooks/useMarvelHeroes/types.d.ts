interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  urls: {
    type: string;
    url: string;
  }[];
}

interface MarvelAPIResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelCharacter[];
}

interface MarvelAPIPages {
  pages: MarvelAPIResponse[];
}

interface MarvelAPIObject {
  json: MarvelAPIPages;
  meta: {
    values: {
      [key: string]: any;
    };
  };
}

// Tipos para Hero e Comic
interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: { type: string; date: string }[];
  pageCount: number;
  description: string;
}

interface Hero {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: Comic[];
}

interface CharacterDetailProps {
  hero: Hero;
}
