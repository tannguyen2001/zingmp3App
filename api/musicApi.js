import httpClient from "./httpClient";
const getTop100 = () => httpClient.get("getchart");

export { getTop100 };
