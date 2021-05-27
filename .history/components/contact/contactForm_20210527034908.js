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
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, email, text } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "Please enter your name";

    if (!email || email === "") newErrors.email = "cannot be blank!";

    if (!text || text === "") newErrors.text = "cannot be blank!";

    return newErrors;
  };

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
    const newErrors = findFormErrors();

    let data = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
      title: enteredTitle,
    };
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
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
  }

  return (
    <div className={classes.main}>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            ref={nameInputRef}
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            ref={emailInputRef}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
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
            onChange={(e) => setField("text", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.text}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          className={classes.button}
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
