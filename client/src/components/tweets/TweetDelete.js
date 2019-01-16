import React from 'react';
import Modal from '../Modal';

const TweetDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    )

    return (
        <div>
            TweetDelete
            <Modal title="Delete Story" content="Are you sure you want to delete?" actions={actions} />
        </div>
    )
}

export default TweetDelete;