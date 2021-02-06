import { useEffect, useState } from "react";
// Styles
import "./styles/main.scss";
// NPM Packages
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 500;

	return (
		<div className="App">
			<BrowserRouter>
				{isMobile ? (
					<>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/aboutus" component={AboutUs} />
							<Route path="/events" component={Events} />
							<Route path="/resources" component={Resources} />
							<Route path="/contact" component={Contact} />
							<Redirect to="/" />
						</Switch>
						<Footer />
						<Nav />
					</>
				) : (
					<>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/aboutus" component={AboutUs} />
							<Route path="/events" component={Events} />
							<Route path="/resources" component={Resources} />
							<Route path="/contact" component={Contact} />
							<Redirect to="/" />
						</Switch>

						<Footer />
					</>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
