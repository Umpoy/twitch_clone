import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => {
    return <div>Hello World</div>
}

const Test = () => {
    return <div>Testing router...</div>
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