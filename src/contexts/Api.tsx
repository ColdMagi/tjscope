import { useContext } from "react";
import { createContext, PropsWithChildren } from "react";

const api = "https://api.tjournal.ru/v2.31";
const ApiContext = createContext(api);
const useApiContext = () => useContext(ApiContext);

function ApiProvider({ children }: PropsWithChildren) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export { useApiContext };
export default ApiProvider;
