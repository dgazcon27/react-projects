import React, { useState, useContext } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import swal from "sweetalert";
import loader from "../../assets/images/loader.svg";

import { Auth } from "../../context/AuthContext";

import "../../assets/styles/contact.css";
import Firebase from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const db = firebase.firestore(Firebase);

const Contact = () => {
  const { user } = useContext(Auth);
  const [messageAlert, setMessageAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState());
  const onChange = (value, type) => {
    setMessageAlert("");
    setForm({ ...form, [type]: value });
  };

  const onSubmit = () => {
    if (!form.name) {
      setMessageAlert("Name required");
    } else if (!form.email) {
      setMessageAlert("Email required");
    } else if (!form.message) {
      setMessageAlert("Message required");
    } else {
      setLoading(true);
      db.collection("message")
        .add({
          name: form.name,
          email: form.email,
          message: form.message,
          userNew: user.userNew,
          uid: user.uid,
        })
        .then((response) => {
          setLoading(false);
          swal(
            "Thanks!",
            "Your message has been sent successfully!",
            "success"
          );
          setForm(initialState());
        })
        .catch((response) => console.log(response));
    }
  };

  return (
    <Container fluid className="contact-container center-text">
      <Row>
        <Col lg={12} md={12} sm={12} className="form-box">
          <h1 className="title-section">Contact</h1>
          <div className="form-container">
            <Form>
              <Form.Group>
                <Form.Control
                  onChange={(e) => onChange(e.target.value, "name")}
                  value={form.name}
                  className="form-input"
                  placeholder="Name"
                  type="text"
                />
                <Form.Control
                  onChange={(e) => onChange(e.target.value, "email")}
                  value={form.email}
                  className="form-input"
                  placeholder="Enter email"
                  type="email"
                />
                <Form.Control
                  onChange={(e) => onChange(e.target.value, "message")}
                  className="form-input"
                  value={form.message}
                  placeholder="Send me your message"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <p className="message-alert">{messageAlert}</p>
              <Button variant="primary" onClick={onSubmit}>
                {loading ? (
                  <img style={{ width: "1em" }} src={loader} alt="loader" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const initialState = () => {
  return {
    name: "",
    email: "",
    message: "",
  };
};
export default Contact;
