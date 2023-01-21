import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

const useInfiniteScroll: (
  callback: CallableFunction
) => [
  ref: (node: Element) => void,
  setIsFetching: Dispatch<SetStateAction<boolean>>
] = (callback: CallableFunction) => {
  const [ref, isVisible] = useInView({ threshold: 1 });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsFetching(true);
    } else {
      return;
    }
  }, [isVisible]);
  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  return [ref, setIsFetching];
};
export default useInfiniteScroll;
