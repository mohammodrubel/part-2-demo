import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dashboard1 from "./Dashboard1";

const Dashboard = () => {
  
  return (

    <Container>
      <Row className="d-flex align-items-center bg-light">
        <Col sm={6} className="mx-auto">
          <h3>Information</h3>
        </Col>
        <Col sm={6} className="mx-auto">
          <div className="d-flex gap-2 align-items-center">
            <div class="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Start searching by any
              "
                aria-label="Start searching by any
              "
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
            <button className="btn btn-primary w-25">Add New</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Dashboard1/>
      </Row>
    </Container>
  );
};

export default Dashboard;
