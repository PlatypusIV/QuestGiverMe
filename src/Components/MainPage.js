import React from 'react';

import {Header,Body} from './index';

import {createStore} from 'redux';

import styles from './../App.css';


export default class MainPage extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
        <div className={`MainPageDiv ${styles.MainPageDiv}`}>
            <Header />
            <Body />
        </div>
        )
    }
}