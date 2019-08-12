import React, { Component } from "react";
import Swipeable from "react-swipy";

import Card from "./subSwipeMatch/Card";
import Button from "./subSwipeMatch/Button";

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
    url: "https://picsum.photos/250"
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
                onAfterSwipe={(this.remove, Card.forceUpdate)}//forceUpdate refreshes component before 3rd state
              >
                <Card url={this.state.url}>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && (
                <Card url={this.state.url} zIndex={-1}>
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
export default SwipeMatch;