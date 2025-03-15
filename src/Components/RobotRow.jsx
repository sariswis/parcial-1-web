function RobotRow({ robot, onClick }) {
    const keys = ['id', 'nombre', 'modelo', 'empresaFabricante'];

    return (
        <tr onClick={() => onClick(robot)}>
            {keys.map((key, index) => (
                    <td className="text-start" style={index === 0 ? { fontWeight: "bold" } : {}} key={index}>
                        {key in robot ? robot[key] : 'No encontrado'}
                    </td>
            ))}
        </tr>
    );
}

export default RobotRow;