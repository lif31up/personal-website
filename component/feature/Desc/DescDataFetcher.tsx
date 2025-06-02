import ReactQueryProvider, {
  descDataAtom,
  descDataQueryFn,
} from "@/utils/ReactQuery";
import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

// Main Component
export default function DescDataFetcher() {
  return (
    <ReactQueryProvider>
      <Fetcher />
    </ReactQueryProvider>
  );
}

// Fetcher Function
function Fetcher() {
  const setDescDataAtom = useSetRecoilState(descDataAtom);
  const {
    data: descData,
    isLoading: isLoading,
    isError: isError,
  } = useQuery({
    queryFn: async () => await descDataQueryFn(setDescDataAtom),
    queryKey: ["desc-query"], // Cache key for query
  });
  if (isLoading || isError || !descData) return <></>;
  return <></>;
}
