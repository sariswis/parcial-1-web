import RobotRow from './RobotRow';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

function RobotList({robots, setSelectedRobot, setRobots}) {
    const headers = [
      <FormattedMessage id="idHeader"/>, 
      <FormattedMessage id="nameHeader"/>,
      <FormattedMessage id="modelHeader"/>,
      <FormattedMessage id="manufacturerHeader"/>
    ];

    useEffect(() => {
        fetch('http://localhost:3001/robots')
            .then(res => res.json())
            .then(data => {
              setRobots(data);
          });
    }, []);

    return (
      <table className="table">
        <thead className="table-dark">
          <tr>
            {headers.map((h, i) => (
                <th className="text-start" key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            { robots.map((r, i) => (
                <RobotRow key={i} robot={r} onClick={setSelectedRobot}/>
            ))}
        </tbody>
      </table>
    )
}

export default RobotList;

