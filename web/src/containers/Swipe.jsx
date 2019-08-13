import React, { Component } from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipy";

import Card from "./subSwipe/Card";
import Button from "./subSwipe/Button";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden",
  color: "white"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class SwipeMatch extends Component {
  state = {
    cards: ["First", "Second", "Third"],
    url: "https://placeimg.com/250/250/people"
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={(this.remove, Card.forceUpdate)} //forceUpdate refreshes component before 3rd state
              >
                <Card url={this.props.users[0].thumbnail}>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && (
                <Card url={this.props.users[1].thumbnail} zIndex={-1}>
                  {cards[1]}
                </Card>
              )}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
    //1st part comes from reducers 2nd part sends it to component state as props
  };
}

export default connect(mapStateToProps)(SwipeMatch);
