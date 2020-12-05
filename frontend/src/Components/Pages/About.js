import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1 style={headingStyle}>About</h1>
                <div style={aboutDivStyle}>
                    <h2 style={aboutStyle}>Codex.io allows you to</h2>

                    <p style={aboutStyle2}><span style={{fontSize:'5rem', fontStyle: 'italic'}}>Upload</span> and <span style={{fontSize:'5rem', fontStyle: 'italic'}}>download</span> files for different classrooms for easy access</p>

                    <p style={aboutStyle2}>There is no need to have to mail individual files to students anymore</p>
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

const aboutStyle = {
    padding: '0.5em',
    fontSize: '3em'
};

const aboutStyle2 = {
    padding: '0 0.5em',
    fontSize: '4em',
    fontWeight: 'bold'
};

const aboutDivStyle = {
    textAlign: 'center',
    margin: '7em'
};

export default About;