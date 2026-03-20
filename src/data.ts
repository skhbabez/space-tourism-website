export interface Crew {
  id: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
export interface CrewSummary {
  id: string;
  name: string;
}

export interface Destination {
  id: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface DestinationSummary {
  id: string;
  name: string;
}

export interface Technology {
  id: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
}

export interface TechnologySummary {
  id: string;
  name: string;
}

interface Data {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

// We mock an api. Mostly to test out tanstacks caching mechanism and intent based preloading.
// While we could just load all the data per route as a list of e.g. destinations, this would not make the preloading visible in the dev Tools.
const fetchData = async (): Promise<Data> => {
  const response = await fetch("/data.json");
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  }
  throw Error("Data could not be loaded");
};

export const fetchCrew = async (Id: string): Promise<Crew | undefined> => {
  const data = await fetchData();
  const crewData = data.crew.find((crew) => crew.id === Id);
  return crewData;
};

export const fetchCrews = async (): Promise<CrewSummary[]> => {
  const data = await fetchData();
  return data.crew.map((crew) => ({
    id: crew.id,
    name: crew.name,
  }));
};

export const fetchDestination = async (
  Id: string,
): Promise<Destination | undefined> => {
  const data = await fetchData();
  const destinationData = data.destinations.find(
    (destination) => destination.id === Id,
  );
  return destinationData;
};

export const fetchDestinations = async (): Promise<DestinationSummary[]> => {
  const data = await fetchData();
  return data.destinations.map((destination) => ({
    id: destination.id,
    name: destination.name,
  }));
};

export const fetchTechnology = async (
  Id: string,
): Promise<Technology | undefined> => {
  const data = await fetchData();
  const technologyData = data.technology.find(
    (technology) => technology.id === Id,
  );
  return technologyData;
};
export const fetchTechnologies = async (): Promise<TechnologySummary[]> => {
  const data = await fetchData();
  return data.technology.map((technology) => ({
    id: technology.id,
    name: technology.name,
  }));
};
