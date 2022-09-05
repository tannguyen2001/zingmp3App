import httpClient from "./httpClient";
const getTop100 = () => httpClient.get("getchart");
const getSong = (id) => httpClient.get(`getsong?idSong=${id}`);
const getSongsBySearch = (search) =>
  httpClient.get("/searchsong", {
    keyword: search,
  });

export { getTop100, getSong, getSongsBySearch };
