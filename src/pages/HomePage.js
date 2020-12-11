import React, { Component } from 'react'
import AboutPage from './AboutPage';
import MyProjects from './MyProjects'
import MyStack from './MyStack'
import ContactPage from './ContactPage'

class HomePage extends Component {
    render () {
        return (
            <div>
                <div id="homepage" className="homePageContainer">
                    <h1>Christopher Zalapa</h1>
                    <p>Full-Stack UI Web Developer</p>
                </div>
                <AboutPage />
                <MyProjects />
                <MyStack />
                <ContactPage />
            </div>
        )
    }
}

export default HomePage;