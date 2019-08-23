import React from "react";
import PropTypes from "prop-types";
import { Message, MessageText, Row } from "@livechat/ui-kit";

function Messager({ message, author }) {
	if (author && message) {
		
	
	switch (author) {
		case "Me":
			return (
				<Row reverse>
					<Message authorName={author}>
						<MessageText>{message}</MessageText>
					</Message>
				</Row>
			);
				
		default:
			return (
				<Row>
					<Message authorName={author}>
						<MessageText>{message}</MessageText>
					</Message>
				</Row>
			);
		
	}
	
}
}

Message.propTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default Messager;
