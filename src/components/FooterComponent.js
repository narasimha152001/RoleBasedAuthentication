import React, { Component } from 'react'
import './Footer.css';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text"><strong>C-TEL INFOSYSTEMS</strong></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
