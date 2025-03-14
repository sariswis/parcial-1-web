import { Card } from 'react-bootstrap';

function RobotCard({ robot }) {
  const urlRobot = 'https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot'+ robot.id + '.png';

  return (
    <Card>
      <Card.Img variant="top" src={urlRobot} />
      <Card.Body>
        <Card.Title>{robot.nombre}</Card.Title>
        <Card.Text>
          <p><b>➞ Año de fabricación:</b> {robot.añoFabricacion}</p>
          <p><b>➞ Capacidad de procesamiento:</b> {robot.capacidadProcesamiento}</p>
          <p><b>➞ Humor:</b> {robot.humor}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default RobotCard;