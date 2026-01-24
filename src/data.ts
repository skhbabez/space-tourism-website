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

// we mock an api
const fetchData = async (): Promise<Data> => {
  const cachedData = localStorage.getItem("data");
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  const response = await fetch("/data.json");
  if (response.ok) {
    const responseData = await response.json();
    localStorage.setItem("data", JSON.stringify(responseData));
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
