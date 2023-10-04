import React, {useState} from 'react';
import './NewPostPage.css';
import FormInputField from "../../components/forminputfield/FormInputField.jsx";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";
import {Link} from 'react-router-dom';
import axios from "axios";

function NewPostPage() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [sendForm, setSendForm] = useState(false);
    const [id, setId] = useState(``);

    async function submitForm(e) {
        e.preventDefault();
        try {
            const postData = {
                title,
                subtitle,
                author,
                content,
                shares: 0,
                comments: 0,
                created: new Date().toISOString(),
                readTime: calculateReadTime(content),
            };

            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log(response);
            setId(response.data.id);

            if (response.status === 201) {
                setSendForm(true);
            }

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <section>
            <div className="newpost-container">

                {!sendForm ?
                    <>
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
                                        value={content}
                                        minLength={300}
                                        maxLength={4000}
                                        required={true}
                                        onChange={(e) => setContent(e.target.value)}
                                    >
                        </textarea>
                                </div>

                                <button type="submit">Post uw bericht</button>
                            </form>

                        </div>

                    </>
                    :
                    <div className="newpost-message">
                        <h3>Yes, je post is toegevoegd !!! Je vindt hem <Link to={`/postdetails/${id}`}>hier</Link></h3>
                    </div>
                }
            </div>
        </section>
    );
}

export default NewPostPage;
