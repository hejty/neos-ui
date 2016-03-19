import React, {Component, PropTypes} from 'react';
import {IconButton} from 'Components/index';

export default class EditSelectedNode extends Component {
    static propTypes = {
        isDisabled: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        isDisabled: true
    };

    render() {
        const {
            isDisabled,
            className
        } = this.props;

        return (
            <IconButton
                className={className}
                isDisabled={isDisabled}
                onClick={this.editSelectedNode.bind(this)}
                icon="pencil"
                hoverStyle="clean"
                />
        );
    }

    editSelectedNode() {
        console.log('edit selected node');
    }
}
