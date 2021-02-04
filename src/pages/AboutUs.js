import React, { useState, useEffect } from "react";
// Components
import BoardMemberLeft from "../components/AboutUs/BoardMemberLeft";
import BoardMemberRight from "../components/AboutUs/BoardMemberRight";
import BackgroundSVG from "../components/BackgroundSVG";
// Svg
import BlackUSB from "../images/black-usb.svg";
import PinkUSB from "../images/pink-usb.svg";
// Image
import Avatar from "../images/avatar.jpg";
// Sanity
import sanityClient from "../sanity";

const AboutUs = () => {
	const [boardMembers, setBoardMembers] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "boardMember"]  {
					orderID,
					_id,
					name,
					position,
					blurb,
					profilePic{
						asset->{
							_id,
							url
						},
					},
				} | order(orderID asc)`
			)
			.then(data => setBoardMembers(data))
			.catch(error => console.log(error));
	}, []);

	console.log(boardMembers);

	return (
		<div className="aboutus">
			<BackgroundSVG />

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
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSdQtcJtHljZQxD7LLw7Rmq2N8ISO8Xa2kblnPbiG11kvVxsEA/viewform"
								target="_blank"
								rel="noopener noreferrer">
								this form
							</a>{" "}
							and join our{" "}
							<a
								href="https://www.facebook.com/groups/acmucsc"
								target="_blank"
								rel="noopener noreferrer">
								Facebook
							</a>{" "}
							and{" "}
							<a
								href="https://ucsc-acm.slack.com/join/shared_invite/zt-4fwpvndh-NwAqvgdaFOyNbadEZvu4zA#/"
								target="_blank"
								rel="noopener noreferrer">
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

				{boardMembers.map((person, index) => {
					if (index % 2 === 1) {
						return (
							<BoardMemberRight
								id={person._id}
								key={person._id}
								position={person.position}
								name={person.name}
								profile={person.profilePic.asset.url}
								message={person.blurb}
							/>
						);
					} else {
						return (
							<BoardMemberLeft
								key={person._id}
								id={person._id}
								position={person.position}
								name={person.name}
								profile={person.profilePic.asset.url}
								message={person.blurb}
							/>
						);
					}
				})}

				{/* 
				<BoardMemberLeft
					position="president"
					name="disha mevada"
					profile={Avatar}
					message="Hi everyone! I’m Disha and I’m currently a senior majoring in CS. Joining ACM was one of the best decisions I made in college. I was really confused about my career when I was a freshman, but joining ACM gave me a clear sense of direction and community. Not only did I get a chance to build my technical skills through worksthops and events like HackACM, I also got the chance to meet some amazing people who shared the same passion as I did. I hope to see you at our ACM events! "
				/>
				<BoardMemberRight
					position="vice president"
					name="shefali qamar"
					profile={Avatar}
					message="Hi! I’m Shefali, a junior studying CS at UCSC and your ACM Vice President! Through ACM the past few years, I have learned about leadership and what it takes to be a successful software engineer, developed passion projects at HackACM, and honed my skills through workshops such as resume writing, coding interview skills, machine learning, Python, and more. The best part has been getting to go through it all alongside a great community of welcoming & energetic people!  I hope that you join us in making ACM the place where we grow and learn computer science together. "
				/> */}
			</div>
		</div>
	);
};

export default AboutUs;
