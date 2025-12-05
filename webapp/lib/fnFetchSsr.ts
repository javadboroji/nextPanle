export interface IetchProps {
  url: string,
  headers?: any,
  body?: any,
  method: "GET" | "POST" | "PUT" | "DELETE",
}
export const fnFetchSsr = async (props: IetchProps) => {
  const mergedOptions: RequestInit = {
    method: props.method,
    headers: {
      "Content-Type": "application/json",
      ...props.headers,
    },
    cache: "no-store",
  };

  if (props.method !== "GET" && props.body) {
    mergedOptions.body = JSON.stringify(props.body);
  }

  try {
    const response = await fetch(props.url, mergedOptions);

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
