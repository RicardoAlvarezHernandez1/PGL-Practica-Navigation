const BORED_API_URL = "https://www.boredapi.com/api/activity";

type BoredJsonResponse = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};

const getInitRequest = (httpVerb: string): RequestInit => {
  const init: RequestInit = {
    method: httpVerb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return init;
};

export const getRandomActivities = async (): Promise<string> => {
  let activities: string = "";

  const request: RequestInfo = `${BORED_API_URL}`;
  const response = await fetch(request, getInitRequest("GET"));
  const json: BoredJsonResponse = await response.json();

  if (json != null) {
    activities = json.activity;
  }

  return activities;
};
