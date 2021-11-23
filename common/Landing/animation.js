import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export default class animation extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
            <style type="text/css">
                .st0{fill:none;}
            </style>
            <g id="Layer_2">
                <rect class="st0" width="500" height="500"/>
            </g>

            <g id="Layer_1">

                <path class="wave" d="M182.5,264.8c1.1,9,22.4-0.9,26.8,4.2c4.4,5.1,17.9,10.9,21,11.7s5.9-1.1,7.5-2.8c1.7-1.7,0.4-5.2,0.4-5.2s-2.6-8.5,4.7-9
                    c7.3-0.5,59.2-16,59.9-28c0,0,0.8-2.1-1.3-5.8c-2.1-3.5-24.4-31.6-24.4-31.6s-3-2.5-7-0.6s-40,37-63.3,34c0,0-8,0.3-11.2,3.6
                    c-5.2,5.5-6.9,16.2-7.7,17.9C185.5,258.1,182.5,264.8,182.5,264.8z"> 

                </path>

                <path d="M200.6,233.1c-23.4-0.8-74.5-2.8-99.1,24s-24,59.1-8,73.7s29.6,28.6,29.6,28.6s4.8,4.8,9.2,1.2c0,0,13.2-42.3,24.2-42.5
                    s4.6,17.4,8.2,18.8c3.6,1.4,21-2.4,23.4,2.4s-35.4,25-32.6,30c2.8,5,79.5,3.8,79.5,3.8s9-2.6,9-9s4.8-77.4-5.8-92.4
                    C238.2,271.7,220.4,235.9,200.6,233.1z"/>

                <path class="wave" d="M282.5,178.7h73.2c0,0-11.7,28.7-36.6,28.7S282.5,178.7,282.5,178.7z"/>
                    
                <path d="M121.6,197c-3.2-6.5-5-13.8-5-21.5c0-27,21.9-48.9,48.9-48.9c15.6,0,29.5,7.3,38.5,18.7l14.4-8.2c0,0,3.5-1.4,5.3,0.3
                    s-1.6,4.4-1.6,4.4L121.6,197"/>

                <path d="M126,204.5c8.9,11.7,23,19.2,38.8,19.2c27,0,48.9-21.9,48.9-48.9c0-5.7-1-11.2-2.8-16.3L126,204.5z"/>

                <g id="layer_3">
                    <ellipse class="pizza" cx="325.4" cy="calc(159.8px - 105px)" rx="92.5" ry="10.4"></ellipse>
                </g>  

            </g>
        </svg>
                
            </div>
        )
    }
}
