import React,{useEffect, useState} from 'react'
import { Form,Button,Container,Message, Label} from 'semantic-ui-react'
import {io} from 'socket.io-client';


const socket = io();

class Msg {
    constructor(data) {
        this.id = socket.id;
        this.msg = data;
    }
};




export default function chatroom() {

    const [input,setInput]=useState(null);
    const [msgs,setsMsgs] = useState(null);

    useEffect(()=>{socket.on('all',arg=>{
        setsMsgs(arg);
    })},[msgs]);

    

    const func =(data)=> socket.emit('button',new Msg(data));

    return <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Form widths='equal'>
            <Form.Field >
                <label>Name</label>
                <input onChange={(data)=>{setInput(data)}} style={{width:'300px'}}/>
            </Form.Field>
            <Button onClick={()=>{func(input.target.value)}}> Submit</Button>
        </Form>
        <Container text style={{backgroundColor:'white',padding:'10px',display:'flex',flexDirection:'column',marginTop:'10px',height:'400px',overflow:'scroll'}}>
            {msgs && msgs.map((i)=>{
                if(i.id==socket.id) return <Message style={{display:'flex',alignItems:'center'}} compact info>{i.msg}
                <Label basic size='mini' horizontal attached='top right'>from {i.id}</Label></Message>
                else return <Message warning>{i.msg}
                <Label basic size='mini' horizontal attached='top right'>from {i.id}</Label></Message>
            })}
        </Container>
    </div>
    
}