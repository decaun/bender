import React from "react";
import PropTypes from "prop-types";
import {
	Message,
	MessageText,
	MessageGroup,
	Bubble,
} from "@livechat/ui-kit";

function Messager({ message, author }) {
	if (author && message) {
		switch (author) {
			case "Me":
				return (

						<MessageGroup key={message}
							avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
							isOwn={true}
						>
							<Message isOwn={true} authorName={author} >
								<Bubble isOwn={true}>
									<MessageText isOwn={true}>{message}</MessageText>
								</Bubble>
							</Message>
						</MessageGroup>

				);

			default:
				return (

						<MessageGroup key={message}
							avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
							isOwn={false}
						>
							<Message isOwn={false} authorName={author}>
								<Bubble isOwn={false}>
									<MessageText isOwn={false}>{message}</MessageText>
								</Bubble>
							</Message>
						</MessageGroup>

				);
		}
	}
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default Messager;
