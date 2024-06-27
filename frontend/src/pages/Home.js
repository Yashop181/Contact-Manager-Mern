import { useState, useEffect } from "react"
import axios from "axios"
import ContactList from "../components/ContactList"
const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/contact')
    .then(response => setContacts(response.data))
    .catch(error => console.error(error));
  },[]);
  return (
    <div>
      <h1>Contact list</h1>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default Home
