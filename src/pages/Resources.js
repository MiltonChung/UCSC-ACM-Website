import React from "react";
// Icons
import CircleO from "../images/circle-o.svg";
import Circle from "../images/circle.svg";
import DoubleLines from "../images/double-lines.svg";
import DoubleLinesDot from "../images/double-lines-dot.svg";
import TripleLines from "../images/triple-lines.svg";
import Arrow from "../images/arrow.svg";

const Resources = () => {
	return (
		<div className="resources">
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

			<h2>
				curated resources list-- just for <span className="font-blue">you</span>
			</h2>

			<div className="survive">
				<h3>
					<span className="font-blue">💪 surviving CS</span> at UCSC 💪
				</h3>
				<p>Need advice?</p>
				<p>You can start by reading this advice from a fellow CS major. </p>
				<p className="bold">What classes do I take? </p>
				<div className="answer">
					<p>Here’s all the classes you’ll need to take along with when they’re offered this year:</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="/" target="_blank" rel="noopener noreferrer">
								Curriculum Flow Charts
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="/" target="_blank" rel="noopener noreferrer">
								Schedule of Classes
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="/" target="_blank" rel="noopener noreferrer">
								Registrar
							</a>
						</li>
					</ul>
				</div>
				<p className="bold">Want to learn more about a professor?</p>
				<div className="answer">
					<p>
						Visit this{" "}
						<a href="/" target="_blank" rel="noopener noreferrer">
							link
						</a>
						.
					</p>
				</div>
				<p className="bold">Or get involved with research?</p>
				<div className="answer">
					<p>
						Visit this{" "}
						<a href="/" target="_blank" rel="noopener noreferrer">
							link
						</a>
						.
					</p>
				</div>
				<p>Here’s some advice from officers.</p>
				<p>--INSET ADVICE HERE--</p>
			</div>

			<div className="dream-job">
				<h3>
					😎 getting that <span className="font-blue">dream</span> internship or job 😎
				</h3>
				<p>Fill this out!</p>
				<p>
					Start by filling out this worksheet to figure out what you want your ideal career to look like.
				</p>

				{/* Section */}
				<h4>Resume and Cover Letters Advice</h4>
				<p>
					Time to perfect your resume and cover letters, here's advice straight from recruiters themselves
					and a template for cold emails to get you started.
				</p>
				<ul>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/" target="_blank" rel="noopener noreferrer">
							Resume
						</a>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/" target="_blank" rel="noopener noreferrer">
							Cover Letter
						</a>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Cold Emails</p>
					</li>
				</ul>
				<p>Now you’re ready to learn more about the interview process!</p>
				<p>
					Here’s a good overview, a more detailed overview, and advice from a UCSC ACM Alumni that works at
					Microsoft now.
				</p>

				{/* Section */}
				<h4>Side Projects!</h4>
				<p>They probably mentioned having side projects, here are some great ways to start one:</p>
				<ul>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Our project programs</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>
							Hackathons! You can find a list of all the MLH hackathons here. (most of them will be
							online this year). We even have a UCSC one, CruzHacks!
						</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Some other ideas for inspiration</p>
					</li>
				</ul>

				{/* Section */}
				<h4>Technical Prep</h4>
				<p>You can find some more detailed information about technical prep here.</p>
				<p>
					We recommend going through this book, Cracking the Coding Interview, and practicing coding
					questions here:
				</p>
				<ul>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>CECI Fair</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>LinkedIn</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Jumpstart</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Handshake</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>BSOE Newsletter</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Piazza</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Cold Emails</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/">Big List of Companies</a>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/">Another Big List</a>
					</li>
				</ul>
				<p>
					Don't worry if you’re a first or second year, you can still apply! Here’s a list of fellowships
					tailored just for you:
				</p>
				<ul>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/" target="_blank" rel="noopener noreferrer">
							Andreesson Horowitz
						</a>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/" target="_blank" rel="noopener noreferrer">
							Kleiner Perkins
						</a>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<a href="/" target="_blank" rel="noopener noreferrer">
							Sequoia
						</a>
					</li>
				</ul>

				{/* Section */}
				<h4>Ugh! There are so many companies; how do I keep track of them all?</h4>
				<p>We recommend using these:</p>
				<ul>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Huntr.co </p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Airtable</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Trello</p>
					</li>
					<li>
						<img src={Arrow} alt="arrow" />
						<p>Google Sheets + Excel</p>
					</li>
				</ul>

				{/* Section */}
				<h3>
					🎉<span>congratulations!</span> you got the job 🎉
				</h3>
			</div>
		</div>
	);
};

export default Resources;
