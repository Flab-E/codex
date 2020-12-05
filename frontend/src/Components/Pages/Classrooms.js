import React from 'react';
import {UploadButton} from '../Buttons';
import Files from '../Files';

class DDCO extends React.Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        }

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Digital Design and Computer Organization</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
                    <Files files={this.state.fileList} />
                </div>
            </div>
        );
    }
}

class DSA extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        }

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Data Structures and Algorithms</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
                    <Files files={this.state.fileList} />
                </div>
            </div>
        );
    }
}

class SDS extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        }

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Statistics for Data Science</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
                    <Files files={this.state.fileList} />
                </div>
            </div>
        );
    }
}

class WT extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        }

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Web Technologies</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
                    <Files files={this.state.fileList} />
                </div>
            </div>
        );
    }
}

class AFLL extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        }

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Automata Formal Languages and Logic</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
                    <Files files={this.state.fileList} />
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

export {DDCO, DSA, SDS, WT, AFLL};