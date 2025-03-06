import ReactQueryProvider, {
  descDataAtom,
  descDataQueryFn,
} from "@/utils/ReactQuery";
import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

function DescDataFetcher() {
  return (
    <ReactQueryProvider>
      <Fetcher />
    </ReactQueryProvider>
  );
}
export default DescDataFetcher;

function Fetcher() {
  const setDescDataAtom = useSetRecoilState(descDataAtom);
  const {
    data: descData,
    isLoading: isLoading,
    isError: isError,
  } = useQuery({
    // Fetch function
    queryFn: async () => await descDataQueryFn(setDescDataAtom),
    queryKey: ["desc-query"], // Cache key for query
  }); // useQuery()
  if (isLoading || isError || !descData) return <></>;
  return <></>;
}
