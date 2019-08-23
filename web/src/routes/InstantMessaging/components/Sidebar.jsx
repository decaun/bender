import React from "react";
import PropTypes from "prop-types";
import {
	ChatList,
	Avatar,
	Column,
	Title,
  ChatListItem,
} from "@livechat/ui-kit";

const Sidebar = ({ MessageUsers }) => (
	<div style={{ maxWidth: '30%' }}>

<ChatList style={{ maxWidth: 300 }}>

			{MessageUsers.map(MessageUsers => (
        		  <ChatListItem key={MessageUsers.id}>
            <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
            <Column justify>

				<Title key={MessageUsers.id}>{MessageUsers.name}</Title>

        </Column>
		</ChatListItem>
   
			))}
 </ChatList>

	</div>
);

Sidebar.propTypes = {
	MessageUsers: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default Sidebar;
