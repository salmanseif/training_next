import { Row, Col } from "react-bootstrap";
import style from "styles/webmoviestyle.module.css";
const Category = ({ data }) => {
  console.log(data);
  const { genres } = data;
  console.log(genre);

  return (
    <div>
      <Row className="w-100 mt-2">
        {genre.map((genreMovie) => (
          <Col className="d-flex mt-2" key={genreMovie.id}>
            <a href="" className={style.catBtn}>
              {genreMovie.name}
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
