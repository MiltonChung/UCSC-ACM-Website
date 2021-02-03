import React from "react";
import BackgroundSVG from "../components/BackgroundSVG";
// Icons
import handPhone from "../images/hand-phone.svg";
import { Icon } from "@iconify/react";
import Email from "@iconify/icons-ic/baseline-email";
import Facebook from "@iconify/icons-brandico/facebook-rect";
import Slack from "@iconify/icons-ant-design/slack-square-outlined";

const Contact = () => {
	return (
		<div className="contact">
			<BackgroundSVG />

			<div className="leftSide">
				<h2>
					stay in <span className="font-blue">touch!</span>
				</h2>
				<div className="icon-holder">
					<Icon className="email" icon={Email} />
					<a href="https://www.facebook.com/groups/acmucsc" target="_blank" rel="noopener noreferrer">
						<Icon className="facebook" icon={Facebook} />
					</a>
					<a
						href="https://ucsc-acm.slack.com/join/shared_invite/zt-4fwpvndh-NwAqvgdaFOyNbadEZvu4zA#/"
						target="_blank"
						rel="noopener noreferrer">
						<Icon className="slack" icon={Slack} />
					</a>
				</div>
			</div>
			<div className="rightSide">
				<img src={handPhone} alt="phone" />
			</div>
		</div>
	);
};

export default Contact;
