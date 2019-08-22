import React from "react";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

function InstantMessaging() {
	return (
		<div>
			<Sidebar />
			<MessagesList />
			<AddMessage />
		</div>
	);
}

export default InstantMessaging;
