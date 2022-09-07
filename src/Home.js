import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, loading, error } = useFetch("https://blogapi-env-1.eba-bvpkafzm.us-west-1.elasticbeanstalk.com/blogs?pageNumber=0&pageSize=20");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
