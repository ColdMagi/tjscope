import type { Osnova } from "types/osnova";
import { useApi, useApiLazy } from "./useFetch";

/**
 * Fetchs subsite info, entries and comments for form base representation of subsite
 * @param id identifier of subsite needed to load
 * @returns loaded data for provided subsite
 */
function useScope(id: number) {
  const { data, error: subsiteError } = useApi<Osnova.Subsite.SubsiteResponse>(
    `/subsite?id=${id}`
  );
  const entries = useApiLazy<Osnova.Entry.EntriesResponse>(
    `/user/${id}/entries`,
    undefined,
    "1.9"
  );
  const comments = useApiLazy<Osnova.Comment.CommentsResponse>(
    `/user/${id}/comments`,
    undefined,
    "1.9"
  );

  const {
    result: { subsite },
  } = data || {
    result: {
      subsite: {
        name:
          comments?.result?.at(0)?.author?.name ||
          entries?.result?.at(0)?.author?.name,
      } as any,
    },
  };

  return {
    subsite: subsite as Osnova.Subsite.SubsiteResponse["result"]["subsite"],
    subsiteError,
    entries,
    comments,
  };
}

export default useScope;
