import { getEgoApi as RequestAxios} from "../api/baseEgoApi";

export default (url: string) => {
  return RequestAxios().get(url);
};