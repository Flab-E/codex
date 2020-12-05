import React from 'react';

class UploadButton extends React.Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (this.fileInput.current.files.length === 0) {
    //         console.log('No files');
    //         return;
    //     }
    //     for (let i = 0; i < this.fileInput.current.files.length; i++) {
    //         console.log(this.fileInput.current.files[i].name);
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="file" name="upload" id="upload" ref={this.props.fileInput} />
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        );
    }
}

export {UploadButton};