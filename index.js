import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createRoot } from 'react-dom/client';

import App from './App';
// import reportWebVitals from './reportWebVitals';

//const container = document.getElementById('root');
//const root = createRoot(root);
//root.render(
//<React.StrictMode> 
// <App /> 
// </React.StrictMode>
//);
ReactDOM.render(
    App,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept();
}


//var Hello = React.createClass{

/*function Hello() {
    return(
        <div>
            Hello World
        </div>
    );
}
*/

/*class Hello extends React.Component {
    
    render() {
        return(
            <div>
                <h1 style={{}}>React Demo </h1>
                &nbsp;
    
                <p> React is an open source library developed by facebook in 2013</p>
                <p> Focuse mainly on rendering </p>
                <p>ReactJS uses JSX </p>
            </div>
            
        );
    }


}
class Hello1 extends React.Component {
    render() {
        return(
            <div>
                <h5>Welcome</h5>
            </div>
        );
    }


}

ReactDOM.render( <Hello/> ,
    document.getElementById("container"));
*/