import React from 'react';
import './NewPostPage.css';
import {useState} from "react";
import FormInputField from "../../components/forminputfield/FormInputField.jsx";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";
import {useNavigate} from 'react-router-dom';

function NewPostPage() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault();
        console.log(`Title: ${title}`);
        console.log(`Subtitle: ${subtitle}`);
        console.log(`Name: ${author}`);
        console.log(`Message: ${message}`);
        console.log(`Shares: 0`);
        console.log(`Comments: 0`);
        console.log(`Created: ${new Date().toISOString()}`);
        console.log(`ReadTime: ${calculateReadTime(message)}`);

        navigate('/overzicht');
    }

    return (
        <section>
            <div className="newpost-container">
                <div className="newpost-message">
                    <h3>Uw wilt een nieuwe Blog post plaatsen op BlOgventure, super leuk !! <br/>
                        Vul hieronder het formulier in en uw post zal worden geplaatst. </h3>
                </div>

                <div className="messageContainer">
                    <form onSubmit={submitForm} className="messageForm">

                        <FormInputField
                            labelInputClass="messageDivInput"
                            labelName="inputTitle"
                            labelText="Title"
                            inputType="text"
                            inputName="inputTitle"
                            inputValue={title}
                            setInput={setTitle}
                            required={true}
                        />

                        <FormInputField
                            labelInputClass="messageDivInput"
                            labelName="inputSubtitle"
                            labelText="Subtitle"
                            inputType="text"
                            inputName="inputSubtitle"
                            inputValue={subtitle}
                            setInput={setSubtitle}
                            required={true}
                        />

                        <FormInputField
                            labelInputClass="messageDivInput"
                            labelName="inputAuteur"
                            labelText="Name"
                            inputType="text"
                            inputName="inputAuteur"
                            inputValue={author}
                            setInput={setAuthor}
                            required={true}
                        />

                        <div className="messageDivTextarea">
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                cols="50"
                                rows="15"
                                placeholder="Plaats hier uw blog message"
                                value={message}
                                minLength={300}
                                maxLength={4000}
                                required={true}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                        </textarea>
                        </div>

                        <button type="submit">Post uw bericht</button>
                    </form>

                </div>

            </div>
        </section>


    );
}

export default NewPostPage;