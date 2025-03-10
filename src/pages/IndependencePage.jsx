import { Container, Row, Col } from "react-bootstrap";
import { independenceHeroes } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const IndependencePage = () => {
  return (
    <div className="class-page">
      <div className="class min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Pahlawan Pasca Kemerdekaan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Berikut adalah List Pahlawan Pasca Kemerdekaan.
              </p>
            </Col>
          </Row>
          <Row>
            {independenceHeroes.map((heroes) => {
              return (
                <Col
                  key={heroes.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={heroes.delay}
                >
                  <img
                    src={heroes.image}
                    alt="unsplash.com"
                    className="w-100 mb-3 rounded-top"
                  />
                  <h5 className="mb-3 px-3 text-center">
                    {heroes.title}
                    <br></br>
                    {heroes.region}
                  </h5>
                  <p className="px-3 pb-3 text-justify">{heroes.description}</p>
                  <div className="ket justify-content-between align-items-center px-3 pb-4 text-center">
                    <a className="btn btn-danger rounded-5" href={heroes.url}>
                      {heroes.button}
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default IndependencePage;
