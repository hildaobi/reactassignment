//importing react
import React from "react";

//creating a component
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
        };
    }
//calling the api usinf fetch method
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => //console.log(json));
            {
                this.setState({
                    detail: json.projects,
                });
            })
    }

//displaying from api using jsx
    render() {
        const { detail } = this.state;
        return (
            <div className="projcon">
                <h2 className="job">PROJECTS</h2>
                <div className="listproj">
                <ul className="proj">
                    {detail.map(d => (
                        <li key={d.id}>{d.title} </li>
                    ))
                    }
                </ul>
                <ul>
                    <li><img src="restaurant.jpeg" alt="" width="400"/></li>
                    <li><img src="rental.png" alt="" width="400"/></li>
                </ul>
                </div>
            </div>
        );
    }
}


//enables component to be exported
export default Projects;