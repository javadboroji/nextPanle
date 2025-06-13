const toastColor = (type: "sucess" | "error") => {
  switch (type) {
    case "sucess":
      return {
        backgroundColor: "#22c55e",
        color: "#fff",
      };
    case "error":
      return {
        backgroundColor: "#ef4444",
        color: "#fff",
      };
    default:
      break;
  }
};
export default toastColor;
