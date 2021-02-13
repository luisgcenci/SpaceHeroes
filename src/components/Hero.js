import React, { Component } from 'react'
import '../css/Hero.css'

export default class Hero extends Component {

    handleClick = () =>{
        this.props.selectHero(this);
    }

    render() {

        return (
        
            <div className="col-4 hero-info">
                <img src={this.props.hero.img_url} alt="" id={this.props.heroSelected===this? "activated": ""} onClick={this.handleClick}/>
            </div>
        )
    }
}
