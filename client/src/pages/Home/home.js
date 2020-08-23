import React from "react";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Column from "../../components/Column/index";
import "./home.css"

function Home() {
  return (
    <div>
      <h1>Google Books React App</h1>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Column size="md-12">
            <h1 className="welcome">Hello There</h1>
          </Column>
        </Row>
        <Row>
          <Column size="md-12">
            <p>
              This app allows you to search for books and save them using a database
            </p>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default Home;