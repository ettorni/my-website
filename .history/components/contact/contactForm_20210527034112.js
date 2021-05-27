import classes from "./contactForm.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";
import { Router, useRouter } from "next/router";

function ContactForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const findFormErrors = () => {
    const { name, food, rating, comment } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    
    // food errors
    if ( !food || food === '' ) newErrors.food = 'select a food!'
    // rating errors
    if ( !rating || rating > 5 || rating < 1 ) newErrors.rating = 'must assign a rating between 1 and 5!'
    // comment errors
    if ( !comment || comment === '' ) newErrors.comment = 'cannot be blank!'
    else if ( comment.length > 100 ) newErrors.comment = 'comment is too long!'

    return newErrors
}
 
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const titleInputRef = useRef();
  const messageInputRef = useRef();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  function submitHandler(event) {
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    event.preventDefault();
    console.log("Sending");

    let data = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
      title: enteredTitle,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
      }
    });
  }

  return (
    <div className={classes.main}>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            ref={nameInputRef}
            onChange={ e => setField('name', e.target.value) }
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            ref={emailInputRef}
            onChange={ e => setField('email', e.target.value) }
          />
          <Form.Text className="text-muted">
            Your email will never be shared with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formEmailTitle">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the subject"
            ref={titleInputRef}
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter your message"
            rows={5}
            ref={messageInputRef}
            onChange={ e => setField('text', e.target.value) }
          />
        </Form.Group>
        <Button
          className={classes.button}
          type="submit"
          onClick={() => router.push("/")}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
