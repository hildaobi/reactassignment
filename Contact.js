//importing react
import React from "react";

//creating a component
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
        };
    }
//calling the api usinf fetch method
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => //console.log(json));
            {
                this.setState({
                    item: json.contacts,
                });
            })
    }

//displaying from api using jsx
    render() {
        const { item } = this.state;

        return (
            <div className="container">
                    <div className="aboutcard">
                <h2 className="job">CONTACT ME</h2>
                <p>Telephone no:</p>
                <ul>
                    {item.map(i => (
                        <li key={i.id}>{i.name}  {i.Ph_no} </li>
                        ))
                    }
                </ul>
                <p>Email: </p>
                <p>hilda.eokonyia@gmail.com</p>
                </div>
            </div>
        );
    }
}

//enables component to be exported
export default Contact;