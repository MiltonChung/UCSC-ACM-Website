import React from "react";
// React Router
import { NavLink, Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
import Home from "@iconify/icons-ant-design/home-outlined";
import AboutUs from "@iconify/icons-fluent/people-team-16-filled";
import Events from "@iconify/icons-ion/calendar-outline";
import Resources from "@iconify/icons-ant-design/folder-open-filled";
import Contact from "@iconify/icons-grommet-icons/contact";
import Logo from "../images/dark-logo.svg";

const Nav = () => {
	return (
		<nav>
			<Link to="/" className="nav-logo">
				<img src={Logo} alt="logo" />
			</Link>

			<ul>
				<li>
					<NavLink to="/" title="Home" activeClassName="selected" exact>
						<Icon icon={Home} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/aboutus" title="About Us" activeClassName="selected">
						<Icon icon={AboutUs} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/events" title="Events" activeClassName="selected">
						<Icon icon={Events} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/resources" title="Resources" activeClassName="selected">
						<Icon icon={Resources} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" title="Contact" activeClassName="selected">
						<Icon icon={Contact} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
