import React from 'react';
import Audition from './Audition'

class MainContainer extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Main Container</h1>
                <Audition />
            </div>
        )
    }
}

export default MainContainer;