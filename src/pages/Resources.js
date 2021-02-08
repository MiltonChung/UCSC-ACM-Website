import React from "react";
// Component
import BackgroundSVG from "../components/BackgroundSVG";
// Icons
import Arrow from "../images/arrow.svg";

const Resources = () => {
	return (
		<div className="resources">
			<BackgroundSVG />

			<h2>
				curated resources list-- just for <span className="font-blue">you</span>
			</h2>

			<div className="survive">
				<h3>
					<span className="font-blue">
						<span className="emoji">💪</span> surviving CS
					</span>{" "}
					at UCSC <span className="emoji">💪</span>
				</h3>
				<p>Need advice?</p>
				<p>
					You can start by reading{" "}
					<a
						href="https://www.reddit.com/r/UCSC/comments/84o3wl/advice_for_upcoming_cs_majors/"
						target="_blank"
						rel="noopener noreferrer">
						this advice
					</a>{" "}
					from a fellow CS major.
				</p>
				<p className="bold">What classes do I take? </p>
				<div className="answer">
					<p>Here’s all the classes you’ll need to take along with when they’re offered this year:</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2019-07/CS_BS_19-20.pdf"
								target="_blank"
								rel="noopener noreferrer">
								Curriculum Flow Charts
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://courses.soe.ucsc.edu/courses/cse"
								target="_blank"
								rel="noopener noreferrer">
								Schedule of Classes
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://registrar.ucsc.edu/" target="_blank" rel="noopener noreferrer">
								Registrar
							</a>
						</li>
					</ul>
				</div>
				<p className="bold">Want to learn more about a professor?</p>
				<div className="answer">
					<p>
						Visit this{" "}
						<a
							href="https://www.ratemyprofessors.com/campusRatings.jsp?sid=1078"
							target="_blank"
							rel="noopener noreferrer">
							link
						</a>
						.
					</p>
				</div>
				<p className="bold">Or get involved with research?</p>
				<div className="answer">
					<p>
						Visit this{" "}
						<a href="https://www.soe.ucsc.edu/research" target="_blank" rel="noopener noreferrer">
							link
						</a>
						.
					</p>
				</div>
				{/* <p>Here’s some advice from officers.</p>
				<p>--INSET ADVICE HERE--</p> */}
			</div>

			<div className="dream-job">
				<h3>
					<span className="emoji">😎</span> getting that <span className="font-blue">dream</span>{" "}
					internship or job <span className="emoji">😎</span>
				</h3>
				<p className="bold">Fill this out!</p>
				<div className="answer">
					<p>
						Start by filling out{" "}
						<a
							href="https://docs.google.com/document/d/1o76GaLDSHzquHhII9u-XAyKapSBvTh5f2NVri1KaPIk/edit"
							target="_blank"
							rel="noopener noreferrer">
							this worksheet
						</a>{" "}
						to figure out what you want your ideal career to look like.
					</p>
				</div>

				{/* Section */}
				<p className="bold">Resume and Cover Letters Advice</p>
				<div className="answer">
					<p>
						Time to perfect your resume and cover letters, here's advice straight from recruiters
						themselves and a template for cold emails to get you started.
					</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://docs.google.com/document/u/1/d/e/2PACX-1vQpvbP8lzPvZrNvrX58UlacpQiLgh1fBQYfOS2pEJZvp-zOb9uKQJYKSsDQ6mJWoPf3H09OmdrLDcaK/pub?urp=gmail_link"
								target="_blank"
								rel="noopener noreferrer">
								Resume
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://www.cmu.edu/career/documents/college-specific-resources/scs/New%20SCS%20Files%202018/CoverLetterGuide2018_SCS.pdf"
								target="_blank"
								rel="noopener noreferrer">
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
						Here’s a{" "}
						<a href="https://github.com/cassidoo/getting-a-gig" target="_blank" rel="noopener noreferrer">
							good overview
						</a>
						, a more{" "}
						<a
							href="https://www.freecodecamp.org/news/how-to-land-a-top-notch-tech-job-as-a-student-5c97fec82f3d/"
							target="_blank"
							rel="noopener noreferrer">
							detailed overview
						</a>
						, and{" "}
						<a
							href="https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c"
							target="_blank"
							rel="noopener noreferrer">
							advice from a UCSC ACM Alumni
						</a>{" "}
						that works at Microsoft now.
					</p>
				</div>

				{/* Section */}
				<p className="bold">Side Projects!</p>
				<div className="answer">
					<p>They probably mentioned having side projects, here are some great ways to start one:</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<p>Our project programs</p>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<p>
								Hackathons! You can find a list of all the MLH hackathons{" "}
								<a
									href="https://mlh.io/seasons/na-2020/events"
									target="_blank"
									rel="noopener noreferrer">
									here
								</a>
								. (most of them will be online this year). We even have a UCSC one,{" "}
								<a href="https://www.cruzhacks.com/" target="_blank" rel="noopener noreferrer">
									CruzHacks
								</a>
								!
							</p>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<p>
								Some{" "}
								<a
									href="https://www.codementor.io/@npostolovski/40-side-project-ideas-for-software-engineers-g8xckyxef"
									target="_blank"
									rel="noopener noreferrer">
									other ideas
								</a>{" "}
								for inspiration
							</p>
						</li>
					</ul>
				</div>

				{/* Section */}
				<p className="bold">Technical Prep</p>
				<div className="answer">
					<p>You can find some more detailed information about technical prep here.</p>
					<p>
						We recommend going through this book, Cracking the Coding Interview, and practicing coding
						questions here:
					</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
								LeetCode
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://codesignal.com/" target="_blank" rel="noopener noreferrer">
								Codesignal
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
								HackerRank
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
								GeeksForGeeks
							</a>
						</li>
					</ul>
					<p>
						You can stay up to date with all the tech news on{" "}
						<a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">
							HackerNews
						</a>
						!
					</p>
					<p>
						Want even more information, come to our X meeting on Y, we’ll be sharing exclusive resources
						from recruiters and engineers.
					</p>
					<p>Still unsure on where to apply? You can utilize these resources:</p>
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
							<a href="https://breakoutlist.com/all/" target="_blank" rel="noopener noreferrer">
								Big List of Companies
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://ghc.anitab.org/previous-years/2018-sponsorships/corporate-sponsors/"
								target="_blank"
								rel="noopener noreferrer">
								Another Big List
							</a>
						</li>
					</ul>
					<p>
						Don't worry if you’re a first or second year, you can still apply! Here’s a list of
						fellowships tailored just for you:
					</p>
					<ul>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://a16z.com/portfolio/" target="_blank" rel="noopener noreferrer">
								Andreesson Horowitz
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a
								href="https://www.kleinerperkins.com/partnerships/"
								target="_blank"
								rel="noopener noreferrer">
								Kleiner Perkins
							</a>
						</li>
						<li>
							<img src={Arrow} alt="arrow" />
							<a href="https://www.sequoiacap.com/companies/" target="_blank" rel="noopener noreferrer">
								Sequoia
							</a>
						</li>
					</ul>
				</div>

				{/* Section */}
				<p className="bold">Ugh! There are so many companies; how do I keep track of them all?</p>
				<div className="answer">
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
				</div>

				{/* Section */}
				<h3>
					🎉<span className="font-blue">congratulations!</span> you got the job 🎉
				</h3>
			</div>
		</div>
	);
};

export default Resources;
