import { useContext } from "react";
import { createContext, PropsWithChildren } from "react";

const api = {
  host: "tjournal.ru",
  version: "2.31",
  proxy:
    "https://guileless-malasada-7737f0.netlify.app/.netlify/functions/server",
};
const ApiContext = createContext(api);
const useApiContext = () => useContext(ApiContext);

function ApiProvider({ children }: PropsWithChildren) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export { useApiContext };
export default ApiProvider;
