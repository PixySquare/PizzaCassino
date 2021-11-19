import React, { Component } from 'react'
import Image from 'next/image'

export default class index extends Component {

    render() {
        return (

            <div onContextMenu={(e)=>{e.preventDefault()}}>
                <Image src={this.props.src} style={this.props.style} alt={this.props.alt} width={this.props.width} height={this.props.height} />
            </div>
        )
    }
}
