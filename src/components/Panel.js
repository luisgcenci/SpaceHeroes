import React, { Component } from 'react';
import '../css/Panel.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Panel extends Component {

    render() {
        
        return (
            <div className="row Panel align-items-end">
                <div className="col-6 Panel-Outer offset-3">
                    <div className="col-12 Panel-Inner">

                        {this.props.heroSelected==null? 
                        <div className="row welcome-message align-items-center">
                            <div className="col-12">
                                <p>Welcome</p>
                                <p>The Universe is at risk, and only you can save it.</p>
                                <p>Act quick and choose a hero to fight the good fight.</p>
                                <p>You don't have much time.</p>
                                <h6>May the Force be with you.</h6>
                            </div>
                        </div>
                        
                        :
                        
                        <div className="row">
                            <div className="col-12 hero-panel-info">
                                <div className="row">
                                    <div className="col-12">
                                        <h4>Hero: {this.props.heroSelected.props.hero.name}</h4>
                                    </div>
                                    <div className="col-8 progress-bar-custom">
                                        <h6>Attack Power</h6>
                                        <ProgressBar variant="danger" now={this.props.heroSelected.props.hero.attack_power} />
                                    </div>
                                    <div className="col-4 hero-img">
                                        <img src={this.props.heroSelected.props.hero.img_url} alt=""/>
                                    </div>
                                    <div className="col-8 progress-bar-custom">
                                        <h6>Defense Power</h6>
                                        <ProgressBar variant="success" now={this.props.heroSelected.props.hero.defense_power} />
                                    </div>
                                    <div className="col-12 hero-characteristics">
                                        <h6>Characteristics</h6>
                                        <p>{this.props.heroSelected.props.hero.description}</p>
                                    </div>
                                    <div className="col-12 hero-skills">
                                        <h6>Speciality</h6>
                                    </div>
                                    {Object.values(this.props.heroSelected.props.hero.skills).map( (skill) =>{
                                        return (
                                            <div className="col-3 skill" key={skill}>
                                                <img src={skill} alt=""/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
