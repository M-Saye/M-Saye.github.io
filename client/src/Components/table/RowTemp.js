import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import RowDyn from "./RowDyn";
import BlankRow from "./BlankRow";

class RowTemp extends Component {
  render() {
    const { row, isKilos, isBarKilos } = this.props;
    return (
      <Fragment>
        <Row className="row">
          {row.map(e => (
            <Col>{e}</Col>
          ))}
          {isKilos === isBarKilos ? <RowDyn row={row} /> : <BlankRow />}
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isKilos: state.weight.isKilos,
  isBarKilos: state.weight.isBarKilos
});

export default connect(mapStateToProps)(RowTemp);
