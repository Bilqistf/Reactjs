import React from 'react'
import { Jumbotron, Button,Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
function AboutComp() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Menu</h1>
                    <p className="lead">Berisi daftar buku </p>
                    <hr className="my-2" />
                    <p>Buku baru</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col><CardComp id="1" judul="Ilmu teknologi" tanggal="22/06/2020"/></Col>
                        <Col><CardComp id="2" judul="Ilmu Fisika" tanggal="23/06/2020"/></Col>                        
                        <Col><CardComp id="3" judul="Ilmu Akuntansi" tanggal="24/06/2020"/></Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
export default AboutComp