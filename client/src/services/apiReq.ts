// makeApiRequest.tsx
import secrets from "@/config/secrets";
import { getToken } from "@/services/auth";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const makeApiRequest = async <T>(
  url: string,
  options: {
    method: HttpMethod;
    headers?: { [key: string]: string };
    body?: string;
  }
): Promise<T> => {
  try {
    const response = await fetch(`${secrets.NEXT_PUBLIC_API_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: "Bearer " + secrets.NEXT_PUBLIC_API_KEY,
        jwtToken: await getToken(),

      },
    });


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error making API request:", error);
    return Promise.reject(error);
  }
};

export default makeApiRequest;
