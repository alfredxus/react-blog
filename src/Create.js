import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Create = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, message, name};

        setLoading(true);

        fetch('http://blogapi-env-1.eba-bvpkafzm.us-west-1.elasticbeanstalk.com/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added.')
            setLoading(false);
            navigate('/');
        })
    }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Title</label>
        <input type="text" value={ title } onChange={(e) => setTitle(e.target.value)} required />
        <label>Message</label>
        <textarea value={ message } onChange={(e) => setMessage(e.target.value)} required />
        <label>Name</label>
        <input type="text" value={ name } onChange={(e) => setName(e.target.value)} required />
        { !loading && <button>Add Blog</button> }
        { loading && <button disabled>Adding Blog...</button> }
      </form>
    </div>
  );
};

export default Create;
