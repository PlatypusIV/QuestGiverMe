import React from 'react';

import {Card,CardBody,CardHeader,CardFooter,Button} from 'reactstrap';

import {Navigation} from './BodyContents/index';

export default class Body extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(<Card><CardBody><Navigation /></CardBody></Card>)
    }
}