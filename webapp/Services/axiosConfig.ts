type AxiosHeadres = "json" | "form" | "text";
export const getAxiosConfig = (type: AxiosHeadres) => {
  const headers = {
    json: { "Content-Type": "application/json" },
    form: { "Content-Type": "multipart/form-data" },
    text: { "Content-Type": "text/plain" },
  };
  return {
    headers: headers[type] || headers.json,
  };
};