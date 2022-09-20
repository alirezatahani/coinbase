import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useRouter = () => {
	const [cookies, setCookie] = useCookies(["stack"]);

	useEffect(() => {
		setCookie("stack", cookies?.stack || ["/"]);
	}, []);

	console.log(cookies.stack, "stack stack stack");
	const goTo = useCallback(
		(query: string) => {
			console.log(cookies.stack, "cookies.stack");
			const _query = query.startsWith("/") ? query : `/${query}`;
			setCookie("stack", [...cookies?.stack, _query]);
		},
		[cookies.stack],
	);

	const goBack: () => void = () => {
		if (cookies.stack.length === 1) return;
		const cloneStack = [...cookies.stack];
		console.log(cloneStack, "cloneStack");
		cloneStack.pop();
		setCookie("stack", cloneStack);
	};

	return { stack: cookies.stack, goBack, goTo };
};
