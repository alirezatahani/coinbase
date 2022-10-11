import { useDispatch, useSelector } from "react-redux";
import { addStack, deleteStack } from "@redux/stack/stackAction";

export const useRouter = () => {
  const stack = useSelector((state: any) => state.stack.stack);
  const dispatch = useDispatch();

  const goTo = (query: string) => {
    const _query = query.startsWith("/") ? query : `/${query}`;
    dispatch(addStack(_query));
  };
  const goBack: () => void = () => {
    dispatch(deleteStack());
  };

  return { goBack, goTo };
};
