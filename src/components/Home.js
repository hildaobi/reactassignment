import React from "react"
//importing react
//creating a component
class Home extends React.Component {
    render() {
        return (
            <div className="homecon">
                <div className="leftcon">
                    <div className="textwrap">
                         <h1 className="name">HILDA OBIOMA</h1>
                        <h2 className="job">Web Developer</h2>
                    </div>
                </div> 
                <div className="rightcon">
                    <div className="img">
                        <img src="/puzzle.png" alt="puzzle piece"/>
                    </div>
                    
               </div>
            </div >

        )
    }
}
//enables component to be exported
export default Home;
