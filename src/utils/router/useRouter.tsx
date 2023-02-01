import { addStack, deleteStack } from "@redux/stack/stackAction";
import { useAppDispatch,useAppSelector } from "hooks/hooks";

export const useRouter = () => {
  const stack = useAppSelector((state) => state.stack.stack);
  const dispatch = useAppDispatch();

  const goTo = (query: string) => {
    const _query = query.startsWith("/") ? query : `/${query}`;
    dispatch(addStack(_query));
  };
  const goBack: () => void = () => {
    dispatch(deleteStack());
  };

  return { goBack, goTo };
};
