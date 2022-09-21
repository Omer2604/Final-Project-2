import http from "./httpService";
const apiUrl = process.env.REACT_APP_API_URL;

export const getPhoto = (photoId) => http.get(`${apiUrl}/photos/${photoId}`);
