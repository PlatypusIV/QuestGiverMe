import React from 'react';

import {Header,Body} from './index';

import styles from './../App.css';


export default class MainPage extends React.Component{

    render(){
        return(
        <div className="MainPageDiv">
            <Header />
            <Body />
        </div>
        )
    }
}