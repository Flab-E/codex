import axios from 'axios';
import React from 'react';
import {UploadButton} from '../Buttons';
import Files from '../Files';

class DDCO extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            fileList: [],
            selectedFile: null
        };
    }
    // componentDidMount() {
    //     window.addEventListener('load', this.handleLoad);
    // }
    
    // componentWillUnmount() { 
    //    window.removeEventListener('load', this.handleLoad)  
    // }
    
    // handleLoad = () => {
    //     axios.get('http://localhost:8080/allUploaded/ddco').then(res => {
    //         this.setState({fileList: res.data});
    //     });
    // }

    componentWillMount() {
        axios.get('http://localhost:8080/allUploaded/ddco').then(res => {
            this.setState({fileList: res.data});
        });
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        } else if (this.fileInput.current.files.length > 1) {
            alert('Please select only 1 file');
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        var post_query = `http://localhost:8080/upload/ddco`;
        axios.post(post_query, formData, {})
        .then(res => {
            console.log(res.statusText);
        });

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Digital Design and Computer Organisation</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
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
            fileList: [],
            selectedFile: null
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8080/allUploaded/dsa').then(res => {
            this.setState({fileList: res.data});
        });
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        } else if (this.fileInput.current.files.length > 1) {
            alert('Please select only 1 file');
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        var post_query = `http://localhost:8080/upload/dsa`;
        axios.post(post_query, formData, {})
        .then(res => {
            console.log(res.statusText);
        });

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Data Structures and Applications</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
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
            fileList: [],
            selectedFile: null
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8080/allUploaded/sds').then(res => {
            this.setState({fileList: res.data});
        });
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        } else if (this.fileInput.current.files.length > 1) {
            alert('Please select only 1 file');
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        var post_query = `http://localhost:8080/upload/sds`;
        axios.post(post_query, formData, {})
        .then(res => {
            console.log(res.statusText);
        });

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Statistics For Data Science</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
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
            fileList: [],
            selectedFile: null
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8080/allUploaded/wt').then(res => {
            this.setState({fileList: res.data});
        });
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        } else if (this.fileInput.current.files.length > 1) {
            alert('Please select only 1 file');
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        var post_query = `http://localhost:8080/upload/wt`;
        axios.post(post_query, formData, {})
        .then(res => {
            console.log(res.statusText);
        });

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
                    <UploadButton onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
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
            fileList: [],
            selectedFile: null
        };
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    componentWillMount() {
        axios.get('http://localhost:8080/allUploaded/afll').then(res => {
            this.setState({fileList: res.data});
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.fileInput.current.files.length === 0) {
            alert('No files');
            return;
        } else if (this.fileInput.current.files.length > 1) {
            alert('Please select only 1 file');
            return;
        }

        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        var post_query = `http://localhost:8080/upload/afll`;
        axios.post(post_query, formData, {})
        .then(res => {
            console.log(res.statusText);
        });

        this.setState(state => {
            const fileList = state.fileList.concat(this.fileInput.current.files[0].name);

            return {fileList};
        });
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Automata And Formal Language Logic</h1>
                <div style={{textAlign: 'center'}}>
                    <UploadButton onChange={this.onChangeHandler} handleSubmit={this.handleSubmit} fileInput={this.fileInput} />
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