import './Teacher.css';
import { useState } from "react";
function Teacher() {
    const shoot = (inputa) => {
        alert(inputa);
    }
    const [schoolStatus, enroll] = useState("unenrolled");

    return (
        <div>
            <h3 className="Teacher-header">I am the teacher.</h3>
            <button onClick={() => shoot("This is the string value for a")}>Take the shot!</button>
            <h3>My enrollment status is {schoolStatus}</h3>
            <h4>Processing Enrollment...</h4>
            <button
                type="button"
                onClick={() => enroll("enroll")}
            >Enroll
            </button>
            <MyButton/>
            <h3>My enrollment status is {schoolStatus}</h3>
        </div>
    )
}

export function MyButton() {
    return <button>Click</button>
}
export function LogOut() {
    return (
        <>
            <h1 className = "goodbyeHeader">See you next time</h1>
            <h3>Whatever</h3>
            <br />
            <h4>Secret Out</h4>
        </>
    )
}


export default Teacher;