interface IetchProps {
    url:string, 
    headers?:any ,
    body?:any,
    method:"GET"|"POST"|"PUT"|"DELETE",
  }
  export const fnFetchSsr = async (props: IetchProps) => {
  
    // Combine headers and other options
    const mergedOptions = {
      method: props.method,
      body: JSON.stringify(props.body),
      headers: {
        ...props.headers,
      },
    };
  
    try {
      const response = await fetch(props.url, mergedOptions);
  
      if (!response.ok) {
        // Handle specific error codes or conditions here
        
         if (response.status === 404) {
          throw new Error("Not found");
        } else {
          throw new Error("Server error");
        }
      }
  
      return response.json();
    } catch (error) {
      // Handle general errors here
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error for further handling
    }
  };