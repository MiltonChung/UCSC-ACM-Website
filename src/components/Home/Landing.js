import React from "react";
// Images
import Logo from "../../images/light-logo.svg";

const Landing = () => {
	return (
		<div className="landing">
			<div className="landing-texts">
				<img className="landing-texts-logo" src={Logo} alt="logo" />
				<h1 className="landing-texts-title">
					ucsc <span>acm</span>
				</h1>
				<p className="landing-texts-subtitle">the largest computer science community at uc santa cruz</p>
				<p className="landing-texts-description">
					We are a student run organization that strives to create a supportive and inclusive community for
					people of all backgrounds and skill levels who are passionate about computer science to learn and
					network.
				</p>
			</div>
		</div>
	);
};

export default Landing;
