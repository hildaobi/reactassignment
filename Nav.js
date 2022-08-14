//importing react
import React from "react"

//creating a component
class Nav extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo"></div>
                <nav className="nav">
                    <ul className="navlist">
                        <li> <a href=".homecon">Home</a></li>
                        <li> <a href=".aboutcon">About me</a></li>
                        <li> <a href=".skillcon">Skills</a></li>
                        <li> <a href="#projcon">Project</a></li>
                        <li> <a href="#contactcon">Contact Me</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
}
//enables component to be exported
export default Nav;
