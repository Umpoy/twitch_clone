import React, { Component } from 'react';
import { connect } from 'react-redux';

class StreamEdit extends Component {
    render() {
        return <div>StreamEdit</div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(null)(StreamEdit);