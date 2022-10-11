import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@global/Global";
import { Route, Router, useRouter } from "@utils/router";
import "./styles/globals.css";
import Home from "@pages/home/content/Home";
import Alert from "@pages/alert/content/Alert";

function App() {
  const { goTo, goBack } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Route
					to="/"
					component={
						<div>
							<h1>Home</h1>
							<button onClick={() => goTo("one")}>GoTo One</button>
						</div>
					}
				/>
				<Route
					to="/one"
					component={
						<div>
							<h1>One</h1>
							<button onClick={() => goTo("two")}>GoTo Two</button>
							<button onClick={() => goBack()}>goBack</button>
						</div>
					}
				/>
				<Route
					to="/two"
					component={
						<div>
							<h1>Two</h1>
							<button onClick={() => goTo("one")}>GoTo One</button>
							<button onClick={() => goTo("two/123")}>GoTo Two 123</button>
							<button onClick={() => goBack()}>goBack</button>
						</div>
					}
				/>
				<Route
					to="/two/:initialId"
					component={
						<div>
							<h1>Two with Initial ID</h1>
							<button onClick={() => goTo("")}>GoTo Home</button>
							<button onClick={() => goBack()}>goBack</button>
						</div>
					}
				/>
				<Route
					to="/one/:initialId"
					component={
						<div>
							<h1>Two with Initial ID</h1>
							<button onClick={() => goTo("")}>GoTo Home</button>
							<button onClick={() => goBack()}>goBack</button>
						</div>
					}
				/>
				<Route
					to="/one/:initialId/category/:categoryId"
					component={
						<div>
							<h1>Two with Initial ID</h1>
							<button onClick={() => goTo("")}>GoTo Home</button>
							<button onClick={() => goBack()}>goBack</button>
						</div>
					}
				/> */}

        <Route to="/" component={<Home />} />
        <Route to="/alert" component={<Alert />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
