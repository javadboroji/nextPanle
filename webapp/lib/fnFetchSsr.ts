export interface IetchProps {
  url: string,
  headers?: any,
  body?: any,
  method: "GET" | "POST" | "PUT" | "DELETE",
}
export async function fnFetchSsr<T = any>(props: IetchProps): Promise<T> {

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
      return {
        error: true,
        data: null,
        message: "FETCH_FAILED",
      } as T
    }

    return response.json() as Promise<T>;
  } catch (error) {
    return {
      error: true,
      data: null,
      message: "FETCH_FAILED",
    } as T
  }
};
