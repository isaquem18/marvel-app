interface MarvelResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: MarvelData;
}

interface MarvelData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Collection;
  series: Collection;
  stories: StoryCollection;
  events: Collection;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Collection {
  available: number;
  collectionURI: string;
  items: CollectionItem[];
  returned: number;
}

interface CollectionItem {
  resourceURI: string;
  name: string;
}

interface StoryCollection {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
}

interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

interface Url {
  type: string;
  url: string;
}

interface HeroApiItem {}
