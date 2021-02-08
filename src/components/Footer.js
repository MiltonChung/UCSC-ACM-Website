import React from "react";
// Image
import Logo from "../images/dark-logo.svg";
import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import linkedinIcon from "@iconify/icons-brandico/linkedin";
import webIcon from "@iconify/icons-mdi/web";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Logo} alt="logo" />
			<p>
				Created by{" "}
				<a href="https://miltonchung.com/" target="_blank" rel="noopener noreferrer">
					Milton Chung
				</a>
			</p>
			<div className="footer-socials">
				<div className="github">
					<a href="https://github.com/MiltonChung" target="_blank" rel="noopener noreferrer">
						<Icon icon={githubFilled} />
					</a>
				</div>
				<div className="linkedin">
					<a href="https://www.linkedin.com/in/miltonchung/" target="_blank" rel="noopener noreferrer">
						<Icon icon={linkedinIcon} />
					</a>
				</div>
				<div className="website">
					<a href="https://miltonchung.com/" target="_blank" rel="noopener noreferrer">
						<Icon icon={webIcon} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
