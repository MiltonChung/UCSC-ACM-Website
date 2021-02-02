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
					<span className="font-blue">surviving CS</span> at UCSC
				</h3>
				<p>Need advice?</p>
				<p>You can start by reading this advice from a fellow CS major. </p>
				<p>What classes do I take? </p>
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
				<p>Want to learn more about a professor?</p>
				<p>
					Visit this{" "}
					<a href="/" target="_blank" rel="noopener noreferrer">
						link
					</a>
					.
				</p>
				<p>Or get involved with research?</p>
				<p>
					Visit this{" "}
					<a href="/" target="_blank" rel="noopener noreferrer">
						link
					</a>
					.
				</p>
				<p>Here’s some advice from officers.</p>
				<p>--INSET ADVICE HERE--</p>
			</div>
		</div>
	);
};

export default Resources;
