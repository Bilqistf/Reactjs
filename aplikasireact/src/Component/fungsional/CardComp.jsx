import React from 'react';
//import { Link } from 'react-router-dom';

import {Button, Row, Col, CardBody, CardImg} from 'reactstrap';

function CardComp(props) {
        return (
            <Row>
      <Col sm="6">
        <CardBody>
        <CardImg top width="5%" src="https://www.gramedia.com/blog/content/images/size/w1000/2019/07/Erasmus-Huis2-mldspot-fin.jpg" alt="Card image cap" />
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>PEMINJAMAN</h3>
          
          <Button>BUKU DIPINJAM</Button>
          </Col>
        </CardBody>
      </Col>

      <Col sm="6">
        <CardBody>
        <CardImg top width="5%" src="https://www.gramedia.com/blog/content/images/size/w1000/2019/07/Erasmus-Huis2-mldspot-fin.jpg" alt="Card image cap" />
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>PENGEMBALIAN</h3>
          
          <Button>BUKU KEMBALI</Button>
          </Col>
        </CardBody>
      </Col>
    </Row>
        )
    }
export default CardComp;
