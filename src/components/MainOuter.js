import React, { Component } from 'react';
import Mouse from './Mouse'
import Heroes from './Heroes'
import Panel from './Panel'
import '../css/MainOuter.css'

class MainOuter extends Component {

    constructor(props){
        super(props);
        this.state = {heroSelected: null}
    }

    render() {
        return (
            <div className="container-fluid MainOuter ">
                <div className="row row-animated">
                    <div className="col-12">
                    </div>
                </div>
                <Mouse/>
                <Panel heroSelected={this.state.heroSelected}/>
                <Heroes 
                heroSelected={this.state.heroSelected} 
                heroes = {this.props.heroes} 
                selectHero ={(hero) => this.setState({heroSelected:hero})}/>
            </div>
        );
    }
}

export default MainOuter;
