import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { round } from "../../actions/calculateFunctions";

class TotalWeight extends Component {
  render() {
    const { weight, row1, row2, row3 } = this.props;
    let res1 = round(
      weight * (row1[1] / 100 + row2[1] / 100 + row3[1] / 100) * 5
    );
    return (
      <Row className="RowHeader">
        <Col className="no-pad">Total Weight</Col>
        <Col className="no-pad" />
        <Col className="no-pad" />
        <Col className="no-pad">
          {res1.toFixed(1)}
          {" kg"}
        </Col>
        <Col className="no-pad" />
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  weight: state.weight.weight,
  barWeight: state.weight.barWeight
});

export default connect(
  mapStateToProps,
  { round }
)(TotalWeight);