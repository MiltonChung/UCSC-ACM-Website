import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const BoardMemberLeft = ({ name, position, profile, message, id }) => {
	return (
		<div className="board-member-left" key={id}>
			<img className="avatar" src={profile} alt={name} />
			<div className="chat-bubble">
				<p className="chat-bubble-name">
					{name}, {position}
				</p>
				<div className="chat-bubble-text chat-bubble-bottom-left">
					<BlockContent
						blocks={message}
						projectId="b4khrup9"
						dataset="production"
						className="chat-bubble-text chat-bubble-bottom-left"
					/>
				</div>
			</div>
		</div>
	);
};

export default BoardMemberLeft;
