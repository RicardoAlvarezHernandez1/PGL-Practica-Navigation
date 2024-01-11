const REGISTRATION_API_URL = "http://192.168.1.77:8888/users";
const REGISTRATION_PATH = "/register";

export const registerUser = async (
  userName: string,
  userEmail: string,
  userPassword: string
): Promise<number> => {
  const response = await fetch(`${REGISTRATION_API_URL}${REGISTRATION_PATH}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${userName}`,
      email: `${userEmail}`,
      password: `${userPassword}`,
    }),
  });

  return response.status;
};
