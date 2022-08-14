//importing react
import React from "react";

//creating a component
class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: [],
        };
    }
//calling the api usinf fetch method
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => //console.log(json));
            {
                this.setState({
                    api: json.skill,
                });
            })
    }

//displaying from api using jsx
    render() {
        const { api } = this.state;
        return (
            <div className="skillcon">
                <h2 className="job">SKILLS</h2>
                <div className="list">
                  <ul className="skilllist">
                        {api.map(a => (
                            <li key={a.id}>{a.title} <img src={a.image} alt={a.url} width="400" /></li>
                        ))
                        }
                        <div></div>
                    </ul>
                </div>
            </div>
        );
    }
}

//enables component to be exported
export default Skill;