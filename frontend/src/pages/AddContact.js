import { useState } from "react"
import axios from "axios"
const AddContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/contact', {name,email,phone})
        .then(response => {
                console.log(response.data);
                setName('');
                setEmail('');
                setPhone('');
        })
        .catch(error => console.error(error));
    };
  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}
export default AddContact
