import { FormattedMessage } from 'react-intl';

function RobotCard({ robot }) {
  /* The backend image link does not work, because it is a raw GitHub link */ 
  /* It is necessary to open the image in a new tab and this is the obtained link */
  const urlRobot = 'https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/images/robot'+ robot.id + '.png';

  const borderStyle = { border: "1px solid black", backgroundColor: "#D9D9D980" };

  return (
    <div className='pt-3 pb-3 justify-content-center' style={borderStyle}>
      <h5 className="pb-2"><strong>{robot.nombre}</strong></h5>
      <img className="mb-3 w-75" style={borderStyle} src={urlRobot} alt={robot.nombre}/>
      <div className='ms-3 me-3 text-start'>
        <p><strong>➞ <FormattedMessage id="yearOfProductionLabel"/>:</strong> {robot.añoFabricacion}</p>
        <p><strong>➞ <FormattedMessage id="processingCapacityLabel"/>:</strong> {robot.capacidadProcesamiento}</p>
        <p><strong>➞ <FormattedMessage id="humorLabel"/>:</strong> {robot.humor}</p>
      </div>
    </div>
  );
}
export default RobotCard;