import React from "react";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";
import { ThemeProvider } from "@livechat/ui-kit";

function InstantMessaging() {
	return (
		<div className="container-fluid mx-auto">
			<div class="row">
				<ThemeProvider>
					<div class="col">
						<Sidebar />
					</div>
					<div class="col-6">
						<MessagesList />
						<AddMessage />
					</div>
				</ThemeProvider>
			</div>
		</div>
	);
}

export default InstantMessaging;
