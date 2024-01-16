import { IpDirection } from "./IpDirection";

const LOGOUT_API_URL = `http://${IpDirection()}:8888/users`;
const LOGOUT_PATH = "/logout";

export const logoutUser = async (): Promise<Response> => {
  const response = await fetch(`${LOGOUT_API_URL}${LOGOUT_PATH}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
};
