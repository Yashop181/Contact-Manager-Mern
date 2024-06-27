import Contact from "./Contact"
const ContactList = ({contacts}) => {
  return (
    <div>
        {contacts.map(contact => (
            <Contact key={contact._id} contact={contact} />
        ))}
    </div>
  )
}

export default ContactList
