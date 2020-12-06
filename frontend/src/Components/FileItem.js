import React from 'react';

class FileItem extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <p style={itemStyle}>
                    {this.props.file}
                    {/* <button style={removeStyle}>Remove</button> */}
                    <a style={downloadStyle} href={'http://localhost:8080/download/'+this.props.file}>Download</a>
                </p>
            </div>
        );
    }
}

const itemStyle = {
    fontSize: '2.2em',
    margin: '1em 0.5em',
    padding: '1em 1.2em',
    border: '3px solid black',
    borderRadius: '8px',
    background: '#EAEAEA'
};

const downloadStyle = {
    fontSize: '1.2em',
    margin: '0 1em',
    float: 'right',
    border: '1.5px solid black',
    borderRadius: '8px'
};

// const removeStyle = {
//     fontSize: '1.2em',
//     margin: '0 1em',
//     float: 'right',
//     border: '1.5px solid black',
//     borderRadius: '8px',
//     color: 'red'
// };

export default FileItem;