//importing react
import React from "react";

//creating a component
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            foot: [],
        };
    }
//calling the api usinf fetch method
    componentDidMount() {
        fetch("/data.json")
            .then((res) => res.json())
            .then((json) => //console.log(json));
            {
                this.setState({
                    foot: json.socials,
                });
            })
    }

//displaying from api using jsx
    render() {
        const { foot } = this.state;
        return (
            <div className="footer">
                <p>&copy; 2022 Copyright: Hilda Obioma</p>
                <ul className="footlist">
                    {foot.map(f => (
                        <li key={f.id}> <img src={f.image}  alt= {f.url} width="30"/></li>
                    ))
                    }
                </ul>
                
            </div>
        );
    }
}
 //enables component to be exported   
export default Footer;

