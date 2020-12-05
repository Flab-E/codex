import React from 'react';
import FileItem from './FileItem';
import {v4 as uuid} from 'uuid';

class Files extends React.Component {
    render() {
        return this.props.files.map((file) => (
            <FileItem file={file} key={uuid} />
        ));
    }
}

export default Files;