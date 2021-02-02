import React from "react";
// Svg
import CircleO from "../images/circle-o.svg";
import Circle from "../images/circle.svg";
import DoubleLines from "../images/double-lines.svg";
import DoubleLinesDot from "../images/double-lines-dot.svg";
import TripleLines from "../images/triple-lines.svg";
import BlackUSB from "../images/black-usb.svg";
import PinkUSB from "../images/pink-usb.svg";

const AboutUs = () => {
	return (
		<div className="aboutus">
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

			<div className="aboutus-body">
				<h2>
					our <span className="font-blue">mission</span> statement
				</h2>

				<article className="main-bubble">
					<img src={BlackUSB} alt="usb" />
					<div className="bubble">
						<p>
							We want to help students develop their technical and professional skills and create a
							supportive and inclusive environment for anyone interested in computer science!
						</p>
					</div>
				</article>

				<h3>
					i'm interested! how do i get <span className="font-blue">involved</span>?
				</h3>

				<article className="main-bubble">
					<div className="bubble">
						<p>
							That’s great! To become a member, you can fill out{" "}
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSdQtcJtHljZQxD7LLw7Rmq2N8ISO8Xa2kblnPbiG11kvVxsEA/viewform">
								this form
							</a>{" "}
							and join our <a href="https://www.facebook.com/groups/acmucsc">Facebook</a> and{" "}
							<a href="https://ucsc-acm.slack.com/join/shared_invite/zt-4fwpvndh-NwAqvgdaFOyNbadEZvu4zA#/">
								Slack
							</a>{" "}
							group to stay updated about our events or visit our events page. If you have any questions,
							don’t hesitate to contact us!
						</p>
					</div>
					<img src={PinkUSB} alt="usb" />
				</article>

				<h3>
					meet the <span className="font-blue">board</span>
				</h3>
			</div>
		</div>
	);
};

export default AboutUs;
