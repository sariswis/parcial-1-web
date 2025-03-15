// import { Navbar, Container } from 'react-bootstrap';

function RobotNavbar(props) {
    return (
        <div className="container-fluid p-3"> 
            <h1 className="text-center mt-4 mb-4" style={props.titleStyle} >Adopta un Robot con Robot Lovers!</h1>
            <div className="row justify-content-center">
                <div className="col-10"> 
                    <img 
                        src="/banner.png" 
                        alt="Banner" 
                        className="img-fluid w-100" 
                    />
                </div>
            </div>
        </div>
    );
}

export default RobotNavbar;