const LOGOUT_API_URL = "http://192.168.1.77:8888/users";
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
