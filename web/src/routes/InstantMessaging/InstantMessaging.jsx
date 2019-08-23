import React from "react";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";
import { ThemeProvider,defaultTheme } from "@livechat/ui-kit";



function InstantMessaging() {
	return (
		<div className="container-fluid mx-auto">
			<div className="row">
				<ThemeProvider theme={defaultTheme}>
					<div className="col">
						<Sidebar />
					</div>
					<div className="col-6">
						<MessagesList />
						<AddMessage />
					</div>
				</ThemeProvider>
			</div>
		</div>
	);
}

export default InstantMessaging;
