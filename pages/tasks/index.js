import Link from "next/link";
import Layout from "../../components/layout";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  return {
    props: { tasks: data },
  };
};

const Tasks = ({ tasks }) => {
  return (
    <Layout>
      <h1>Tasks</h1>
      <a href="https://jsonplaceholder.typicode.com/posts/"></a>
      <hr />

      {tasks.map((task) => (
        <Link href={`tasks/${task.id}`} key={task.id}>
          <h5>{task.title.toUpperCase()}</h5>
        </Link>
      ))}
    </Layout>
  );
};
export default Tasks;
