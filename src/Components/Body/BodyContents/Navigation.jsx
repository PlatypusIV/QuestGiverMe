import React from 'react';

import {TabContent,TabPane,Nav,NavLink,NavItem} from 'reactstrap';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:'ongoing'
        }
    }

    render(){
        return(
        <div>
            <Nav tabs>
                <NavItem >
                    <NavLink>Ongoing quests</NavLink>
                    
                </NavItem>
                <NavItem>
                    <NavLink>Completed quests</NavLink>
                    
                </NavItem>
                <NavItem>
                    <NavLink>Test</NavLink>
                    
                </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId='ongoing'>
                    <h1>Quest data and other things will go here</h1>
                </TabPane>
            </TabContent>
        </div>)
    }
}