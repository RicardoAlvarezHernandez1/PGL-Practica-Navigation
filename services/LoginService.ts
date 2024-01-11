const LOGIN_API_URL = "http://192.168.1.77:8888/users";
const LOGIN_PATH = "/login";

export const loginUser = async (
  userName: string,
  userPassword: string
): Promise<Response> => {
  const response = await fetch(`${LOGIN_API_URL}${LOGIN_PATH}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${userName}`,
      password: `${userPassword}`,
    }),
  });

  return response;
};
