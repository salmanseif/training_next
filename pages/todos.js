const Todos = (props) => {
  console.log(props);
  const { data } = props;
  console.log(data);
  return data.map((item) => (
    <div key={item._id}>
      <h1>{item.title}</h1>
    </div>
  ));
};

export default Todos;

export async function getServerSideProps(context) {
  const res = await fetch(`https://crud-example-demo.herokuapp.com/todos`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
