import { useNavigate, useParams } from "react-router-dom";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch("https://blogapi-env-1.eba-bvpkafzm.us-west-1.elasticbeanstalk.com/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://blogapi-env-1.eba-bvpkafzm.us-west-1.elasticbeanstalk.com/blogs?id=" + blog.id, {
      method: "DELETE"
    }).then(() => {
      navigate('/');
    })
  }


  return (
    <div className="blog-details">
      { loading && <div>Loading...</div> }
      { error && <div> {error} </div> }
      { blog && (
        <article>
            <h2>{ blog.title }</h2>
            <div>{ blog.message }</div>
            <p>Written by { blog.name }</p>
            <p>Time Created: { blog.timeCreated }</p>
            <p>Last Updated: { blog.timeUpdated }</p>
            <button onClick={ handleClick }>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
