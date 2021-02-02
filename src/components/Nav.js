import React from "react";
// React Router
import { Link, NavLink } from "react-router-dom";

// Icons
import { Icon, InlineIcon } from "@iconify/react";
import Home from "@iconify/icons-ant-design/home-outlined";
import AboutUs from "@iconify/icons-fluent/people-team-16-filled";
import Events from "@iconify/icons-ion/calendar-outline";
import Resources from "@iconify/icons-ant-design/folder-open-filled";
import Contact from "@iconify/icons-grommet-icons/contact";

// import Home from "../images/nav-icons/home.svg";
// import AboutUs from "../images/nav-icons/aboutus.svg";
// import Events from "../images/nav-icons/events.svg";
// import Resources from "../images/nav-icons/resources.svg";
// import Contact from "../images/nav-icons/contact.svg";
// import ClickedHome from "../images/nav-icons/clicked-home.svg";
// import ClickedAboutUs from "../images/nav-icons/clicked-aboutus.svg";
// import ClickedEvents from "../images/nav-icons/clicked-events.svg";
// import ClickedResources from "../images/nav-icons/clicked-resources.svg";
// import ClickedContact from "../images/nav-icons/clicked-contact.svg";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" activeClassName="selected" exact>
						<Icon icon={Home} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/aboutus" activeClassName="selected">
						<Icon icon={AboutUs} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/events" activeClassName="selected">
						<Icon icon={Events} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/resources" activeClassName="selected">
						<Icon icon={Resources} />
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" activeClassName="selected">
						<Icon icon={Contact} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
