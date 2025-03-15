import { Card } from 'react-bootstrap';

function RobotCard({ robot }) {
  const urlRobot = 'https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot'+ robot.id + '.png';

  const borderStyle = { border: "1px solid black", backgroundColor: "#D9D9D980" };

  return (
    <div className='pt-3 pb-3 justify-content-center' style={borderStyle}>
      <h5 className="pb-2"><strong>{robot.nombre}</strong></h5>
      <img className="mb-3 w-75" style={borderStyle} src={urlRobot} alt={robot.nombre}/>
      <div className='ms-3 me-3 text-start'>
        <p><strong>➞ Año de fabricación:</strong> {robot.añoFabricacion}</p>
        <p><strong>➞ Capacidad de procesamiento:</strong> {robot.capacidadProcesamiento}</p>
        <p><strong>➞ Humor:</strong> {robot.humor}</p>
      </div>
    </div>
  );
}
export default RobotCard;