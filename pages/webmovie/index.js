import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import Nav from "../navigation";
import style from "styles/webmoviestyle.module.css";

const Index = ({ data }) => {
  console.log(data);
  const { results: movie } = data;
  console.log(movie);
  return (
    <div>
      <Head>
        <title>Web Movie</title>
      </Head>
      <Nav />
      <Container>
        <h1 className="text-start p-4">Popular Movie</h1>
        <Row>
          {movie && movie.length
            ? movie.map((item) => (
                <Link passHref href={`/webmovie/${item.id}`}>
                  <Col key={item.id}>
                    <div className="ms-3 py-3">
                      <Card
                        style={{
                          width: "16rem",
                          borderRadius: "4px",
                          border: 0,
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          cursor: "pointer",
                        }}
                        className={style.cardStyle}
                      >
                        <Card.Img
                          variant="top"
                          src={
                            "https://image.tmdb.org/t/p/w500" + item.poster_path
                          }
                          style={{ borderRadius: "4px 4px 0 0" }}
                        />
                        <div className={style.overlayBg}></div>
                        <Card.ImgOverlay className="pb-1 ">
                          <div className="d-flex  align-items-center">
                            <Card.Title
                              style={{ fontWeight: "700", color: "white" }}
                            >
                              {item.title}
                            </Card.Title>
                            <div className="rating d-flex mt-2 ms-auto">
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
                              <p
                                className="ms-2"
                                style={{ fontSize: "16px", color: "white" }}
                              >
                                {item.vote_average}
                              </p>
                            </div>
                          </div>
                        </Card.ImgOverlay>
                      </Card>
                    </div>
                  </Col>
                </Link>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
