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
            <h3>My enrollment status is {schoolStatus}</h3>
        </div>
    )
}

export default Teacher;