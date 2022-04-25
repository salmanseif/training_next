import Image from "next/image";
import { Button, Container, Col, Navbar, Row } from "react-bootstrap";
import style from "styles/webmoviestyle.module.css";

const Post = ({ data }) => {
  console.log(data);
  const { spoken_languages } = data;
  const { production_companies } = data;

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/webmovie" className="d-flex">
            <span className={style.iconBtnBack}>&#8592;</span>
            <p className={style.textBtnBack}>Kembali</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>{data.title}</h1>
          <div className="d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
              style={{ color: "orange" }}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p style={{ marginLeft: "5px", fontWeight: "600" }}>
              {data.vote_average}
            </p>
          </div>
        </div>
        <span>{data.tagline}</span>
        <Row className="my-4">
          <Col>
            <Image
              src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              width={600}
              height={800}
            />
          </Col>
          <Col className="position-relative">
            <span className="badge bg-primary mb-2 w-100 py-3 fs-5">
              {data.status}
            </span>
            <p>{data.overview}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="text-muted me-2">Release on</p>
                <span className=" fw-bold">{data.release_date}</span>
              </div>
              <div className="d-flex">
                <span className="me-2 fw-bold">{data.vote_count}</span>
                <p className="text-muted">Vote</p>
              </div>
            </div>
            <div className="d-flex">
              <p className="me-2 text-muted">Revenue</p>
              <span className="fw-bold">{data.revenue}</span>
            </div>
            <div className="d-flex">
              <p className="me-2 text-muted">Budget</p>
              <span className="fw-bold">{data.budget}</span>
            </div>
            <div className="d-flex">
              <p className="me-2 text-muted">Language</p>
              {spoken_languages.map((item) => {
                return (
                  <div key={item.id} className="me-2 fw-bold">
                    <span className="badge bg-light text-danger fs-8">
                      {item.english_name}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="d-flex">
              <p className="me-2 text-muted">Production Company</p>
              {production_companies.map((item) => {
                return (
                  <div key={item.id} className="me-2 fw-bold">
                    <span className="fs-6">{item.name}</span>
                  </div>
                );
              })}
            </div>
            <Button
              className="position-absolute bottom-0 w-100 p-2"
              href={data.homepage}
            >
              Official Page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  console.log(context);
  const params = context.params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
