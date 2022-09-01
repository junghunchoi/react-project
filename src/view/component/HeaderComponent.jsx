import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../component/HeaderComponent.css'
import SignIn from '../singin/Singin';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <div><a href="localhost:3000" className="navbar-brand"> React-Spring 프로젝트</a></div>
                        <div className=".login_Button">
                        <Button variant="light" >로그인 </Button>{''}
                        </div>
                    </nav>
                    
                </header>
            </div>
        );
    }
}

export default HeaderComponent;