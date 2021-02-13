import React, { Component } from 'react';
import '../css/Heroes.css'
import Hero from './Hero'

class Heroes extends Component {

    render() {
        
        return (
            <>
            <div className="row Heroes align-items-end">
                {this.props.heroes.map( (hero) => 
                <Hero 
                hero={hero} 
                key={hero.id} 
                selectHero={this.props.selectHero}
                heroSelected={this.props.heroSelected}
                />)}
            </div>
            </>
        );
    }
}

export default Heroes;
