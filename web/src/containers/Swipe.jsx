import React, { Component } from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipy";
import { bindActionCreators } from "redux";

import Card from "./subSwipe/Card";
import Button from "./subSwipe/Button";
import { GenericAction } from "../actions/GenericAction";
import { RestAction } from "../actions/RestActions";

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
    cards: ["First", "Second", "Third"]
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
                onAfterSwipe={
                  (this.remove,
                  Card.forceUpdate,
                  () =>
                    this.props.RestAction().then(this.props.GenericAction()))
                } //forceUpdate refreshes component before 3rd state
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GenericAction: GenericAction,
      RestAction: RestAction
      //1st var from action binds it to function at 2nd var
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeMatch);
