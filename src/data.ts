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

interface Data {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

// We mock an api. Mostly to test out tanstacks caching mechanism.
const fetchData = async (): Promise<Data> => {
  const response = await fetch("/data.json");
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  }
  throw Error("Data could not be loaded");
};

export const fetchCrew = async (Id: string): Promise<Crew> => {
  const data = await fetchData();
  const crewData = data.crew.find((crew) => crew.id === Id);
  if (crewData) {
    return crewData;
  }
  throw Error(`Crew with the Id ${Id} does not exist`);
};
export const fetchDestination = async (Id: string): Promise<Destination> => {
  const data = await fetchData();
  const destinationData = data.destinations.find(
    (destination) => destination.id === Id,
  );
  if (destinationData) {
    return destinationData;
  }
  throw Error(`Destination with the Id ${Id} does not exist`);
};

export const fetchDestinations = async (): Promise<DestinationSummary[]> => {
  const data = await fetchData();
  return data.destinations.map((destination) => ({
    id: destination.id,
    name: destination.name,
  }));
};

export const fetchTechnology = async (Id: string): Promise<Technology> => {
  const data = await fetchData();
  const technologyData = data.technology.find(
    (technology) => technology.id === Id,
  );
  if (technologyData) {
    return technologyData;
  }
  throw Error(`Technology with the Id ${Id} does not exist`);
};
