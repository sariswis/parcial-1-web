import { Container, Row, Col } from 'react-bootstrap';
import RobotList from './RobotList'
import RobotCard from './RobotCard';
import { useState } from 'react';

function RobotPage() {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);
    return (
      <Container>
        <Row className="mt-3">
          <Col lg="8">
            <RobotList robots={robots} setSelectedRobot={setSelectedRobot} setRobots={setRobots} />
          </Col>
          <Col lg="4">
            {selectedRobot && <RobotCard robot={selectedRobot} /> }
          </Col>
        </Row>
      </Container>
    );
}
export default RobotPage;