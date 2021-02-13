import React, { Component } from 'react'
import little_mouse from '../priv_images/ratinho.png'
import '../css/Mouse.css'

export default class Mouse extends Component {
    render() {
        return (
            <div className="row Mouse">
                <div className="col-3 offset-9 ratinho">
                    <img src={little_mouse} alt=""/>
                </div>
            </div>
        )
    }
}
