import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData()
    const  handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const updatedUser = {
            name: e.target.name.value,
            email: e.target.email.value
        }
        console.log(updatedUser);
        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.modifiedCount>0){
            alert('User updated successfully!')
            form.reset()
        }
 
       })
    }


    return (
        <div>
            <div>
                <h3>Update information of {loadedUser.name}</h3>
                <form onSubmit={handleUpdate}>
                    <input type="text" name="name" defaultValue={loadedUser?.name} />
                    <br />
                    <input type="text" name="email" defaultValue={loadedUser?.email} />
                    <br />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;