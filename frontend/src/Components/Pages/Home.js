import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
                <h1 style={headingStyle}>Home</h1>
                <div style={divStyle}>
                    <h1 style={textStyle}>Share and Download Files From</h1>
                    <h1 style={textStyle}>Different Classrooms</h1>
                </div>
            </div>
        );
    }
}

const headingStyle = {
    textAlign: 'center',
    backgroundColor: "black",
    color: '#FFFBFF',
    padding: '0.8em'
};

const divStyle = {
    margin: '15em 10em'
};

const textStyle = {
    textAlign: "center",
    fontSize: "3em",
    color: "#141301",
    padding: "0.2em"
}

export default Home;