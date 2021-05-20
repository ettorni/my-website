import ContactForm from '../../components/contact/contactForm';
import classes from './index.module.css';

function ContactPage() {
    return(
        <div className={classes.container}>
            <h2>Contact</h2>
            <h3>Feel free to submit a form to reach me.</h3>
            <br />
            <br />
            <ContactForm />
        </div>
    );
}

export default ContactPage;