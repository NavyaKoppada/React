
//-------------------------------------------EXAMPE1---------------------------------------------------------
// const navbar =(
//     <nav>
//     <h1>
//     Monalisa
//     </h1>
//     <ul>
//     <li>Pricing</li>
//     <li>About</li>
//     <li>Contact</li>
//     </ul>
//     </nav>
// )

// ReactDOM.render(navbar,document.getElementById('root'));

//-----------------------------------------EXAMPLE2-----------------------------------------------------------

// const page =(
//     <div>
//     <img src="./react-logo.png" alt="react" className ='img' />
//     <h1><b>Fun Facts about React</b></h1>
//     <ul>
//     <li><b>Point1</b></li>
//     <li><b>Point2</b></li>
//     <li><b>Point3</b></li>
//     <li><b>Point4</b></li>
//     <li><b>Point5</b></li>
//     </ul>
//     </div>
// )

// ReactDOM.render(page,document.getElementById('root'));


//-------------------------------------------QUIZ1------------------------------------------------------------------

// 1. Why do we need to `import React from "react"` in our files?
// A. AS we are not using CDN links instead we are using react17 
// dependencies we need to import react as we are including react 
// in our code. JSX syntax is defined in react.

// 2. If I were to console.log(page) in index.js, what would show up?
// A. JS Objects.

// 3. What's wrong with this code:
// A. 2 sibling elements should wrap in between the parent element.
// ```
// const page = (
//     <div>
//     <h1>Hello</h1>
//     <p>This is my website!</p>
//     </div>
// )
// ```

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// A. Declarative: Telling what system need to do and waiting for the result.
//    Imperative: Telling how to do each step.

// 5. What does it mean for something to be "composable"?
// A. Small pieces keeping together to make something larger than individual pieces.

//---------------------------------------Part 1: Create a page of your own using a custom Page component----------------

// import React from 'react';
// import ReactDOM from 'react-dom';

// function TempPage(){
//     return(
//     <div>
//     <h1>Hello React</h1>
//     <ol>
//     <li>Declarative</li>
//     <li>Composable</li>
//     <li>Interactive</li>
//     </ol>
//     </div>
//     )
// }

// ReactDOM.render(< TempPage/>,document.getElementById('root'))

//--------------------------------------------- ADDITION TO ABOVE CODE----------------
// function TempPage(){
//     return(
//     <div>
//         <header>
//         <nav>
//         <img src="./react-logo.png" width = '40px'></img>
//         </nav>
//         </header>
    
//         <h1>Reasons I'm excited to learn React</h1>
//         <ol>
//         <li>Declarative</li>
//         <li>Composable</li>
//         <li>Interactive</li>
//         </ol>
//         <footer>
//         © 2023 Koppada development. All rights reserved.
//         </footer>
//         </div>
    
//     )
// }

// ReactDOM.render(< TempPage/>,document.getElementById('root'))


//-----------------------------------------------COMPOSIBILITY EXAMPLE------------------------------------------------------------------
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer(){
        return(
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        )
}

function MainContent(){
    return(
        <div>
        <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

