import React from "react";
// Components
import Landing from "../components/Landing";

const Home = () => {
	return (
		<div className="home">
			<Landing />
			<button className="join">Join Us</button>
			<article className="window-card">
				<div className="window-card-top-menu">
					<div className="red-circle"></div>
					<div className="yellow-circle"></div>
					<div className="green-circle"></div>
				</div>
				<div className="window-card-texts">
					<h3 className="window-card-texts-title">
						<span>work</span>shops
					</h3>
					<p className="window-card-texts-body">
						We know how hard it can be to learn new skills and technologies apart from those taught in
						classes.{" "}
						<span className="bold">
							That’s why we host a variety of workshops for different career paths in computer science.
						</span>{" "}
						In the past we’ve held workshops on{" "}
						<span className="bold">
							preparing for coding interviews, getting familiar with machine learning, and building your
							own portfolio website.
						</span>
					</p>
				</div>
			</article>
		</div>
	);
};

export default Home;
