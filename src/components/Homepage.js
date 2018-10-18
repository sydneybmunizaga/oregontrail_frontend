import React, { Component } from "react";
import { Fragment, Grid, Button, Modal, Row, Col } from "react-bootstrap";
import FamilyMember from "./FamilyMember";
import Supply from "./Supply";
import DoneModal from "./DoneModal";
import "../App.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      username: this.props.username,
      money: this.props.money,
      miles: this.props.miles,
      family_members: this.props.family_members,
      supplies: this.props.supplies,
      show: false,
      intervalId: null
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.props.updateFormType("familyForm");
    console.log("modal", this.props);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleGameStart = () => {
    const intervalId = setInterval(this.decrementMiles, 10);
    this.setState({ intervalId: intervalId });
  };

  decrementMiles = () => {
    let newMiles = this.state.miles - 1;
    if (this.state.miles <= 0) {
      clearInterval(this.state.intervalId);
      this.handleShow();
    } else if (this.state.miles === 719) {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
      alert("Made it to Soda Springs, Idaho!");
    } else if (this.state.miles === 1150) {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
      alert("Made it to Fort Laramie, Wyoming!");
    } else {
      this.setState({
        ...this.state,
        miles: newMiles
      });
      this.state.supplies.map(supply => {
        if (supply.name === "food") {
          const newAmt = supply.amount - 3;
          this.setState({
            ...this.state,
            supplies: [
              {
                ...this.state.supplies,
                amount: newAmt
              }
            ]
          });
        }
      });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <Grid>
          <Row className="show-grid">This will be userbar!!!</Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <Col lg={12}>
              <h1>Oregon Trail Homepage!</h1>
              <h4>{this.state.miles} miles from Oregon City</h4>
            </Col>
          </Row>
          <Row className="show-grid">
            {this.state.family_members.map(fm => (
              <Col lg={1}>
                <FamilyMember key={fm.id} fm={fm} />
              </Col>
            ))}
            <Col lg={1} />
            {this.state.supplies.map(fm => (
              <Col lg={1}>
                <Supply key={fm.id} fm={fm} />
              </Col>
            ))}
            <Col lg={1} />
            <Col lg={4}>The trail images will go here!</Col>
          </Row>
          <Row>
            <Col lg={4}>The map will go here!</Col>
          </Row>
        </Grid>
        <Button onClick={this.handleGameStart}>Get Goin!</Button>
        <DoneModal
          show={this.state.show}
          handleShow={this.handleShow}
          handleClose={this.handleClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}
export default Homepage;
