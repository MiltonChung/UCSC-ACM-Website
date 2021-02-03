import React from "react";

const BoardMemberLeft = ({ name, position, profile, message }) => {
	return (
		<div className="board-member-left">
			<img className="avatar" src={profile} alt={name} />
			<div className="chat-bubble">
				<p className="chat-bubble-names">
					{name}, {position}
				</p>
				<p className="chat-bubble-text chat-bubble-bottom-left">{message}</p>
			</div>
		</div>
	);
};

export default BoardMemberLeft;
