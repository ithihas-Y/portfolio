import React from "react"
import pp from "./pp.jpg"
import "devicon";
import "../../node_modules/devicon/devicon.css";
import {Card,Image,List, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';



export default function Home(){


    return (
        <div style={{paddingBottom:'0px'}}>
            <Card raised centered >
                <Image src={pp} size='massive' />
                <Card.Content>
                    <Card.Header>Ithihas</Card.Header>
                <Card.Description>
                    Hello im Ithihas. I'm a fresher looking for some professional experience in web development
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href='https://github.com/ithihas-Y'><i className='devicon-github-original'>Link to my Github</i></a>
                </Card.Content>
            </Card>
            <Segment inverted textAlign='center'>
            <List celled size='massive'>
                <h2>Frameworks used to make this Web Page</h2>
                <List.Item><i className='devicon-css3-plain-wordmark'/>CSS</List.Item>
                <List.Item><i className="devicon-react-original colored">React JS</i></List.Item>
                <List.Item><i className="devicon-html5-plain colored">HTML 5</i></List.Item>
                <List.Item><i className="devicon-nodejs-plain colored">Node JS</i></List.Item>
                <List.Item><i className="devicon-git-plain colored cm-fat-cursor">Git</i></List.Item>
                <List.Item>Sanity Content Management</List.Item>
            </List>
            </Segment>
        </div>
        
    )
}
