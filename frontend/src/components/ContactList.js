import Contact from "./Contact"
import '../Csss/Contact.css'
const ContactList = ({contacts}) => {
  return (
    <div className="contact-list">
    {contacts.map(contact => (
        <div className="contact-card" key={contact._id}>
            <Contact contact={contact} />
        </div>
    ))}
</div>

  )
}

export default ContactList
