import React, { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";

class Fmedicalhistory extends React.Component {
  render() {
    return (
      <main className="paging">
        <Container className="bordercolor3">
          <Row className="bordercolor">
            <Col className="center1">
              <h2>MEDICAL HISTORY</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="bordercolor">
                <Col>
                  <h5>
                    <b>History of past Illness</b>
                  </h5>
                </Col>
              </Row>
              <div className="divprint2">{this.props.pastIllness}</div>
            </Col>
          </Row>
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Family History of Illness</b>
              </h5>
            </Col>
          </Row>
          {this.props.famIllness}
          <Row>
            <Col className="bordercolor">Height(cm): {this.props.height}</Col>
            <Col className="bordercolor">Weight(kg): {this.props.weight}</Col>
            <Col className="bordercolor">
              Blood Type: {this.props.bloodType}
            </Col>
          </Row>
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Immunization</b>
              </h5>
            </Col>
          </Row>
          {this.props.immunization}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Hospitalization</b>
              </h5>
            </Col>
          </Row>
          {this.props.hospitalizations}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Operation</b>
              </h5>
            </Col>
          </Row>
          {this.props.operations}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Medical History</b>
              </h5>
            </Col>
          </Row>
          {this.props.medication}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Allergies</b>
              </h5>
            </Col>
          </Row>
          {this.props.allergies}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Body Art</b>
              </h5>
            </Col>
          </Row>
          {this.props.bodyArt}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Pertubing Habit</b>
              </h5>
            </Col>
          </Row>
          {this.props.habits}
          <Row className="bordercolor">
            <Col>
              <h5>
                <b>Visual Acuity</b>
              </h5>
            </Col>
          </Row>
          {this.props.visualAcuity}
          {this.props.sex === "Female" ? (
            <Fragment>
              <Row className="bordercolor">
                <Col>
                  <h5>
                    <b>O.B Gyne History</b>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col className="bordercolor" xs="7">
                  Menach Year: {this.props.menarchYear}
                </Col>
                <Col className="bordercolor" xs="5">
                  Menach Age: {this.props.menarchAge}
                </Col>
                <Col className="bordercolor" xs="7">
                  Menstruation Duration: {this.props.mensDuration}
                </Col>
                <Col className="bordercolor" xs="5">
                  Dysmenorrhea: {this.props.dysmennorrhea}
                </Col>
              </Row>
            </Fragment>
          ) : null}
        </Container>
        <div class="divFooter">Medical Record ID: {this.props.id}</div>
        <div class="divFooter">
          Generated by: {this.props.firstName} {this.props.middleName}{" "}
          {this.props.lastName}
        </div>

        <div class="divFooter">Date & Time: {this.props.today}</div>
      </main>
    );
  }
}
export default Fmedicalhistory;
