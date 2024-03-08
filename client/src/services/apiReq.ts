// makeApiRequest.tsx

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const makeApiRequest = async <T>(
  url: string,
  options: {
    method: HttpMethod;
    headers?: { [key: string]: string };
    body?: string | FormData;
  }
): Promise<T> => {
  try {
    const response = await fetch(url, {
      ...options
    });


    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
    }
    

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error making API request:", error);
    return Promise.reject(error);
  }
};

export default makeApiRequest;
