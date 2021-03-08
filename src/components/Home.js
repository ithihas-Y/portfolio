import React from "react"
import "./home.css"
import pp from "./pp.jpg"
import "devicon";
import "../../node_modules/devicon/devicon.css";

export default function Home(){

    return (
        <div className="bod">
            
            <div className="pp">
                <h1>hello i'm Ithihas</h1>
                <img alt="" src={pp}/>
            </div>

            <div className="info">
                <h2 className="cursive italic">Skills</h2>
                <div className="lan">
                    <i className="devicon-git-plain colored cm-fat-cursor">Git Bash</i>
                    <i className="devicon-nodejs-plain colored">Node JS</i>
                    <i className="devicon-python-plain colored">Python</i>
                    <i className="devicon-android-plain colored">Android</i>
                    <i className="devicon-react-original colored">React JS</i>
                    <i className="devicon-express-original colored">Express JS</i>
                    <i className="devicon-html5-plain colored">HTML 5</i>
                </div>
            </div>

        </div>
    )
}