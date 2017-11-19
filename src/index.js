// import _ from 'lodash'
// import printMe from './print.js'
//
//
// function component() {
//     var element = document.createElement('div');
//
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     let btn = document.createElement('button');
//     btn.innerHTML='click me dddd console';
//     btn.onclick = printMe;
//     element.appendChild(btn);
//
//
//     return element;
// }
//
// let element = component(); // Store the element to re-render on print.js changes
// document.body.appendChild(element);
//
// if(module.hot){
//     module.hot.accept('./print.js',function () {
//         console.log('Accepting the updated printMe module!')
//         document.body.removeChild(element);
//         element = component(); // Re-render the "component" to update the click handler
//         document.body.appendChild(element);
//     })
// }
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route} from 'react-router-dom';
import {Message} from './print.js'
// import {Input} from "./component/login";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={Message}/>
            <Route path="/abd" component={Message}/>
        </div>
    </BrowserRouter>
),document.getElementById('content'))