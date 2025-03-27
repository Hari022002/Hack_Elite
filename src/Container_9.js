import React from "react";
import "./Container_9.css";
// import codingclub from "./assets/im_2.png";

const Container_9 = () => {
    return (
        <div className="track-container">
            <div className="header">
                {/* <img src={codingclub} alt="Coding Club Logo" className="logo" /> */}
                <h2>HackElite 2025 - Project Guidelines</h2>
            </div>

            <div className="tracks">
                <div className="problem-card">
                    {/* <h3>Voice-Controlled Code Editor for Blind Programmers</h3> */}
                    <p>
                        ✅ Participants can come with an initial solution or idea before the event.<br />
                        ✅ However, they must implement the solution from scratch during the hackathon.<br />
                        ✅ If a participant does not have a pre-planned solution, they can start from scratch at the event.<br />
                        ✅ Organizers may request modifications to test adaptability.<br />
                        ✅ Allowed Technologies: Use any Technology.<br />
                        🚫 Plagiarism or pre-developed projects will lead to disqualification.
                    </p>
                </div>
            </div>
            <div className="header">
                {/* <img src={codingclub} alt="Coding Club Logo" className="logo" /> */}
                <br></br>

                <h2>Additional Details</h2>
            </div>
            <div className="tracks">
                <div className="problem-card">
                    {/* <h3>Voice-Controlled Code Editor for Blind Programmers</h3> */}
                    <p>
                        ✅ Bring Your Own Equipment:<br />
                        ✅ Participants must bring their own laptops, chargers, and any required hardware components.<br />
                        ✅ These will not be provided at the venue.<br />
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default Container_9;
