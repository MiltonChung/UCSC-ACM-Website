import React from "react";

const BoardMemberRight = ({ name, position, profile, message }) => {
	return (
		<div className="board-member-right">
			<div className="chat-bubble">
				<p className="chat-bubble-name">
					{name}, {position}
				</p>
				<p className="chat-bubble-text chat-bubble-bottom-right">{message}</p>
			</div>
			<img className="avatar" src={profile} alt={name} />
		</div>
	);
};

export default BoardMemberRight;
