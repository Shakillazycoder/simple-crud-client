
import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name: name, email: email}
    console.log(user)

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('User added successfully!')
        form.reset();
      }
     })

  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
