//well ofcourse in consoleit will show bunch of errors i think 
//this is because we have not created react app yet
//but the concept of this repository is 
//for you and for myself to understand basic of components

import React from 'react'
import ReactDom from 'react-dom'
//the imports above are not react but js
//reactDom is the package which now we dont have
//unless we dont create react app it wont work 
//but again i remaind it is just a sample 
//the function bellow is called component
//we must start with capital letters 
function Greeting(){
    //the code bellow is not HTML but JSX
    return(
        <div>
            <button>click</button>
            <h4>This is Jasur and this is my first component</h4>
        </div>
    )
}

//on our index.html file we have id='root'
//so we need to render our component 'Greeting()' and we have to 
//we have to clearify where?
//so that's why we have root id
ReactDom.render(<Greeting/>, document.getElementById('root'))