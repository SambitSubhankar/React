import React from 'react';

// function HomePage(props) {
//     let obj = [];
//     for (let i = 1; i <= props.len; i++) {
//         obj.push(HomePage2(props.msg2 + ":-" + i))
//         //obj.push(props.msg2 + ":-" +i)
//     }

//     return <div>
//         <header>welcome to app</header>
//         <body style={{textAlign:'center'}}>
           
//              <div><a href="/"><div>Login Page</div></a><a href="/search">Search page</a></div>
//              welcome to body {obj}
//         </body>
//         <footer>welcome to footer</footer>
//     </div>
// }

// function HomePage2(abc) {
//     return <h4>{abc}</h4>
// }

import Child1 from './childComponent';

function HomePage(props){

    return (<div>
        <Child1 />
    </div>)
}

export default HomePage;