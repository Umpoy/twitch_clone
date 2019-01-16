import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visable active">
            <div className="ui standard modal visable active">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat asperiores sit repellat quasi quam nulla facere atque reiciendis nostrum consequatur deserunt quae, assumenda delectus deleniti porro non. Doloribus, saepe!
            </div>
        </div>
    );
}

export default Modal