import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const BoardMemberRight = ({ name, position, profile, message, id }) => {
	return (
		<div className="board-member-right" key={id}>
			<div className="chat-bubble">
				<p className="chat-bubble-name">
					{name}, {position}
				</p>
				<div className="chat-bubble-text chat-bubble-bottom-right">
					<BlockContent
						blocks={message}
						projectId="b4khrup9"
						dataset="production"
						className="chat-bubble-text chat-bubble-bottom-left"
					/>
				</div>
			</div>
			<img className="avatar" src={profile} alt={name} />
		</div>
	);
};

export default BoardMemberRight;
