import React from "react";
// Components
import Landing from "../components/Home/Landing";
// Svg
import CircleO from "../images/circle-o.svg";
import Circle from "../images/circle.svg";
import Cursor from "../images/cursor.svg";
import DoubleLines from "../images/double-lines.svg";
import DoubleLinesDot from "../images/double-lines-dot.svg";
import TripleLines from "../images/triple-lines.svg";

const Home = () => {
	return (
		<div className="home">
			<Landing />
			<button className="join">Join Us</button>
			<div className="window-cards-container">
				<img className="svg-1" src={CircleO} alt="circleo" />
				<img className="svg-2" src={TripleLines} alt="tripleLines" />
				<img className="svg-3" src={DoubleLinesDot} alt="lines" />
				<img className="svg-4" src={DoubleLinesDot} alt="lines" />
				<img className="svg-5" src={CircleO} alt="circleo" />
				<img className="svg-6" src={TripleLines} alt="tripleLines" />
				<img className="svg-7" src={CircleO} alt="circleo" />
				<img className="svg-8" src={CircleO} alt="circleo" />
				<img className="svg-9" src={DoubleLines} alt="lines" />
				<img className="svg-10" src={Circle} alt="circle" />

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
								That’s why we host a variety of workshops for different career paths in computer
								science.
							</span>{" "}
							In the past we’ve held workshops on{" "}
							<span className="bold">
								preparing for coding interviews, getting familiar with machine learning, and building
								your own portfolio website.
							</span>
						</p>
					</div>
				</article>

				<article className="window-card">
					<div className="window-card-top-menu">
						<div className="red-circle"></div>
						<div className="yellow-circle"></div>
						<div className="green-circle"></div>
					</div>
					<div className="window-card-texts">
						<h3 className="window-card-texts-title">
							<img src={Cursor} alt="cursor" />
							company <span>tours</span> & guest <span>speakers</span>
						</h3>
						<p className="window-card-texts-body">
							Our chapter has connections with people across multiple companies so we can share special
							networking events with our members.{" "}
							<span className="bold">
								You’ll get to hear about new opportunities straight from recruiters and get insight from
								engineers themselves.
							</span>
						</p>
					</div>
				</article>

				<article className="window-card">
					<div className="window-card-top-menu">
						<div className="red-circle"></div>
						<div className="yellow-circle"></div>
						<div className="green-circle"></div>
					</div>
					<div className="window-card-texts">
						<h3 className="window-card-texts-title">
							engineering project <span>programs</span>
						</h3>
						<p className="window-card-texts-body">
							One of the most important parts of being a software engineer that isn’t taught in schools
							is knowing how to work on a team and understanding agile methodologies. In this program,
							we’ll<span className="bold"> custom match people with similar technical backgrounds</span>{" "}
							and they’ll<span className="bold"> work on a special project throughout the quarter.</span>{" "}
							At the end they’ll get a chance to{" "}
							<span className="bold">
								showcase their work, truly getting a feel of what it’s like to work as a software
								engineer.
							</span>
						</p>
					</div>
					<div className="window-card-button">
						<button>Sign Up</button>
					</div>
				</article>

				<article className="window-card">
					<div className="window-card-top-menu">
						<div className="red-circle"></div>
						<div className="yellow-circle"></div>
						<div className="green-circle"></div>
					</div>
					<div className="window-card-texts">
						<h3 className="window-card-texts-title">
							hack<span>ACM</span> & interns
						</h3>
						<p className="window-card-texts-body">
							Hackathons are a great way to get started on a project, but they can be really intimidating
							at times, which is why we created HackACM.{" "}
							<span className="bold">HackACM is a beginner friendly hackathon</span> and serves as a
							great introduction to hackathons. In the past, we’ve had sponsors such as
							<span className="bold">Amazon and Looker</span> and{" "}
							<span className="bold">thousands of dollars in prizes.</span> This year will be our 3rd
							time hosting HackACM and{" "}
							<span className="bold">we are looking for engineering, design, and marketing interns</span>{" "}
							to make it even better than the previous years!
						</p>
					</div>
				</article>

				<article className="window-card">
					<div className="window-card-top-menu">
						<div className="red-circle"></div>
						<div className="yellow-circle"></div>
						<div className="green-circle"></div>
					</div>
					<div className="window-card-texts">
						<h3 className="window-card-texts-title">
							code structure <span>reviews</span>
						</h3>
						<p className="window-card-texts-body">
							Code structure and cleanliness can be a huge factor in job/internship interview success as
							well as success in writing production-ready code as a software engineer. TAs at many
							smaller universities go through code on each assignment with students 1-on-1 to provide
							feedback on purposeful modularization, clean and simplified code, testability, and writing
							good comments. ACM is here to bridge this gap at UCSC! Submit your code to get a code
							structure review by one of our board members today! Please note that we will NOT debug your
							code for you, we will be looking only at the overall structure of the code. Limited to 1
							file per month.
						</p>
					</div>
					<div className="window-card-button">
						<button>Submit</button>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Home;
