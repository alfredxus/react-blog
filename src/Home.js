import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, loading, error } = useFetch("http://blogapi-env-1.eba-bvpkafzm.us-west-1.elasticbeanstalk.com/blogs/sortByTimeCreatedDesc/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
