import React, { Component } from "react";
import { connect } from "react-redux";
import Swipeable from "react-swipy";
import { bindActionCreators } from "redux";

import Card from "../components/Card";
import Button from "../components/Button";
import { GenericAction } from "../../../actions/GenericAction";
import { RestAction } from "../../../actions/RestActions";
import { SwipeAction } from "../actions/SwipeActions";

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
  render() {
    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          <div style={wrapperStyles}>
            <Swipeable
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Button onClick={left}>Reject</Button>
                  <Button onClick={right}>Accept</Button>
                </div>
              )}
              onAfterSwipe={() =>
                this.props.RestAction().then(this.props.SwipeAction())
              } //forceUpdate refreshes component before 3rd state
            >
              <Card
                url={
                  this.props.users[this.props.users.currentCounterPointer].url
                }
              >
                {this.props.users[this.props.users.currentCounterPointer].tag}
              </Card>
            </Swipeable>

            <Card
              url={this.props.users[this.props.users.nextCounterPointer].url}
              zIndex={-1}
            >
              {this.props.users[this.props.users.nextCounterPointer].tag}
            </Card>
          </div>

          <Card zIndex={-2}>No more cards</Card>
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
      RestAction: RestAction,
      SwipeAction: SwipeAction
      //1st var from action binds it to function at 2nd var
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeMatch);
