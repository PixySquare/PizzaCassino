import React, { Component } from 'react'
import Image from 'next/image'

export default class index extends Component {

    render() {
        return (

            <div onContextMenu={(e)=>{e.preventDefault()}}>
                <div style={{borderRadius: '25px', overflow: 'hidden'}}>
                <Image src={this.props.src} style={this.props.style} alt={this.props.alt} width={this.props.width} height={this.props.height} className={this.props.className} />
                </div>
            </div>
        )
    }
}
