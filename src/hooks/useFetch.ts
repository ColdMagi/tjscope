import { useApiContext } from "contexts/Api";
import { useEffect, useReducer, useRef } from "react";
import useUserAgent from "./useUserAgent";

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

/**
 * Fetches data by provided url
 *
 * https://usehooks-ts.com/react-hook/use-fetch
 *
 * @param url url to request
 * @param options fetch request init (optional)
 * @returns state of loading with payload
 */
function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

function useApi<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const api = useApiContext();
  const userAgent = useUserAgent();
  return useFetch<T>(url ? `${api}${url}` : url, {
    ...(options || {}),
    headers: { ...userAgent, ...(options || { headers: {} }).headers },
  });
}

export { useApi };
export default useFetch;
