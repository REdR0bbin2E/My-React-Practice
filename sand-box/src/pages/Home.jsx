

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function Home() {

    const colors = ["red", "black", "black"];

    const [like, setLike] = useState("Like button");
    const [userLiked, setUserLiked] = useState(false);
    const [index, updateIndex] = useState(0);
    const [name, setName] = useState('');
    const [visibility, setVisiblity] = useState(false);
    const [buttonColor, setButtonColor] = useState('red');
    const [arr, updateArr] = useState([0]);
    const arrayOfQuotes = ["Live life to the fullest", "Go outside", "Take advice like a grain of salt"]
    const [index1, setIndex1] = useState(0);
    const toDoList = ["Walk the dog", "Take out the trash", "Finish College Apps"];
    const [usersEmail, setUsersEmail] = useState("");
    const [usersPassword, setUsersPassword] = useState("");
    const [validUserCreds, setValidUserCreds] = useState("");
    const [changingBackgroundColor, setChangingBackgroundColor] = useState("#242424");
    const [backgroundLight, setBackgroundLight] = useState("OFF");

    function checkIfNameIsValid(visibility, name) {
        if (visibility == true && name != "") {
            return (
                <p>Hello {name}</p>
            )
        }
    }

    function checkForValidEmailAndPassword() {
        if (usersEmail == '' || usersPassword == '') {
            setValidUserCreds("email or password not valid please try again");
        }
        else {
            setValidUserCreds("email or password are valid user logged in successfully");
            console.log("testing git change");
            console.log("testing git change2");

        }
    }



    function getRandomQuotes() {
        const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
        setIndex1(randomIndex)
    }

    function updateUserLiked() {
        if (userLiked == false) {
            setUserLiked(true)
            setLike("👍")
        }
        else {
            setUserLiked(false)
            setLike("👎")
        }
    }

    function UpdateIndex() {




        updateIndex(index + 1);



        if (index == 0) {
            return index;
        }
        else if (index == 1) {
            return index;
        }
        else if (index == 2) {

            return index;
        }



        if (index > 2) {
            updateIndex(0);
        }
    }

    function updateBackgroundColor() {
        if (changingBackgroundColor == "#242424") {
            setChangingBackgroundColor("#fff")
            setBackgroundLight("ON")
        }
        else {
            setChangingBackgroundColor("#242424")
            setBackgroundLight("OFF")
        }
    }

    return (
        <div style={{ backgroundColor: changingBackgroundColor }}>

            <h1>
                hi this is Home
            </h1>


            <p>Okay this is working</p>

            <input onChange={i => setName(i.target.value)}></input>

            <button onClick={() => setVisiblity(visibility == false ? visibility == false : visibility == false)}>

                Generate greeting
            </button>

            {checkIfNameIsValid(visibility, name)}


            <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(colors[UpdateIndex()])}>
                Click me to change my color
            </button>




            <div>


                <button onClick={() => updateArr([...arr, arr.length])}>+</button>


                <h1>
                    {arr.map((item) => <index></index>)}
                </h1>
            </div>



            <div>
                <button onClick={() => getRandomQuotes}>
                    display random quote {arrayOfQuotes[index1]}
                </button>

            </div>


            <div style={{ backgroundColor: "blue" }}>

                {toDoList.map((item) => <p>{item}</p>)}
            </div>



            <div>
                <input placeholder='Enter Email' onChange={e => setUsersEmail(e.target.value)} />
                <input placeholder='Enter Password' onChange={e => setUsersPassword(e.target.value)} />
                <button onClick={checkForValidEmailAndPassword}>
                    Click to login
                </button>
                <p>
                    {validUserCreds}
                </p>
            </div>

            <button onClick={updateUserLiked}>
                {like}
            </button>



            <button onClick={updateBackgroundColor}>
                Light is {backgroundLight}
            </button>


        </div>





    )


}

export default Home
