import React from 'react';

import {Card,CardBody,CardHeader,CardFooter} from 'reactstrap';

import styles from '../../App.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(<Card><CardBody><h1>The Tavern image will go here!</h1></CardBody></Card>)
    }
}