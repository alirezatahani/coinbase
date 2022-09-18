import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useRouter = () => {
  const [cookies, setCookie] = useCookies(["stack"]);

  useEffect(() => {
    setCookie("stack", cookies?.stack || ["/"]);
  }, []);

  const goTo: (query: string) => void = (query: string) => {
    setCookie("stack", [...cookies.stack, query]);
  };

  const goBack: () => void = () => {
    if (cookies.stack.length === 1) return;
    const cloneStack = [...cookies.stack];
    cloneStack.pop();
    setCookie("stack", cloneStack);
  };

  return { stack: cookies.stack, goBack, goTo };
};

export default useRouter;
