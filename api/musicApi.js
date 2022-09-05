import httpClient from "./httpClient";
const getTop100 = () => httpClient.get("getchart");
const getSong = (id) => httpClient.get(`getsong?idSong=${id}`);

export { getTop100, getSong };
