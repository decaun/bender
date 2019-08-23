import React from "react";
import PropTypes from "prop-types";
import {
	TextComposer,
	Row,
	Fill,
	SendButton,
	TextInput,
	Fit,
} from "@livechat/ui-kit";

const AddMessage = props => {
	let input;

	return (
		<TextComposer onSend={value => props.dispatch(value, "Me")}>
			<Row align="center">
				<Fill>
					<TextInput />
				</Fill>
				<Fit>
					<SendButton />
				</Fit>
			</Row>
		</TextComposer>
	);
};

AddMessage.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
