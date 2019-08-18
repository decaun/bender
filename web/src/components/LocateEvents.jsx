import React from "react";
import { Card, Button, Nav, ButtonToolbar } from "react-bootstrap";

function LocateEvents() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#upcoming">
            <Nav.Item>
              <Nav.Link href="#upcoming">Upcoming</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#past">Past</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#owned">My owned</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-flex ml-auto mb-1">
              <Button variant="outline-dark" className="ml-1 mr-1" href="#new">
                + Create New
              </Button>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card>
          <Card.Body>
            <Card.Title>$Someones event at $location.</Card.Title>
            <Card.Text>Event description.</Card.Text>
            <Button variant="primary" className="ml-1 mr-1">
              Open in Maps
            </Button>
            <Button variant="danger" className="ml-1 mr-1">
              Rules
            </Button>
            <Button variant="success" className="ml-1 mr-1">
              Message to Host
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">X meters away</Card.Footer>
        </Card>
      </Card>
    </div>
  );
}

export default LocateEvents;
