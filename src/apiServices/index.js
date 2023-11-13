import { featureServiceProvider, serviceProvider } from "./serviceProvider";

export const loginUserAPI = (data) => serviceProvider.post(`/login/login`, data);
export const registerUserAPI = (user) =>serviceProvider.post("/Register/Register" ,user) ;
export const getPagesAPI = () => serviceProvider.get("/pages");
export const sendMessageChatBotAPI = (data) => featureServiceProvider.post("/chat", data);
export const getPageByIdAPI = (id) => serviceProvider.get(`/PageSections/GetPageSectionsById?pageId=${id}`)
export const getVideosPlaylist = (playlistId) => featureServiceProvider.get(`/playlist/${playlistId}`)
