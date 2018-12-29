import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>Hello World</div>
            <Link to="test">About</Link>
        </div>
    )
}

const Test = () => {
    return (
        <div>
            <div>Testing router...</div>
            <Link to="/">Home</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/test" component={Test} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;