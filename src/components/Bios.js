//importing react
import React from "react"

//creating a component
class Bios extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                datas: [],
            };
        }
 //calling the api usinf fetch method   
        componentDidMount() {
            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => //console.log(json));
                {
                    this.setState({
                        datas: json.bios,
                    });
                })
        }
    
    //displaying from api using jsx
        render() {
            const { datas } = this.state;
            return (
                
                <div className="aboutcon">
                    <h2 className="job">ABOUT ME</h2>
                    <div className="aboutcard">
                        {datas.map(d => (
                            <p key={d.id}>{d.info} </p>
                        ))
                        }
                  </div>
                </div>
            );
        }
    }
 //enables component to be exported   
export default Bios;
