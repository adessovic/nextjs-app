import Layout from "../../components/layout";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params : { id : post.id.toString() }
        }
    });

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props : { post : data }
    }
}

const Details = ({ post }) => {
    return (
        <Layout>
            <h1>Task Detail</h1>
            <p>ID: { post.userId }</p>
            <h5>{ post.title.toUpperCase() }</h5>
            <pre>{ post.body }</pre>            
        </Layout>
    )
}
export default Details;