import React from 'react'
import { Container, Row, Col, CardBody, CardImg} from 'reactstrap';

function Aktivitas() {
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 'auto', offset: 4 }}><h2>SISTEM INFORMASI PERPUSTAKAAN </h2></Col>
            </Row>

            <Row>
                <Col xs="6">
                    <div >
                        <div className="p-3 bg-info my-2 rounded col-md-6 " ><h3>AKTIVITAS PERPUSTAKAAN</h3>
                            <p>WAKTU BEROPERASI</p>
                            <div className="col-md-12"  >
                                <h6>Senin : 07.00 - 14.00</h6>
                                <br></br>
                                <h6>Selasa :  07.00 - 14.00</h6>
                                <br></br>
                                <h6>Rabu :  07.00 - 14.00</h6>
                                <br></br>
                                <h6>Kamis :  07.00 - 14.00</h6>
                                <br></br>
                                <h6>Jumat :  07.00 - 14.00</h6>
                                <br></br>
                                <h6>Sabtu :  07.00 - 14.00</h6>
                                <br></br>
                            </div>
                        </div>
                    </div>
                 
                        <br></br>
                </Col>

                <Col xs="6">
                    <br></br>
                    
                    <p>“Perpustakaan merupakan sarana penunjang proses belajar mengajar di sekolah.” Keberadaannya sebagai komponen pendidikan merupakan suatu keharusan. Perpustakaan sekolah dapat memenuhi kebutuhan akan ilmu, referensi, berita, dan informasi yang dibutuhkan oleh pengunjungnya.</p>
                    <CardBody>
                        <CardImg top width="25%" src="https://asset.kompas.com/crops/QeihV_-MPQnjW05qwJK2vpjJUpQ=/0x59:1412x1000/750x500/data/photo/2019/04/08/108903777.jpg" alt="Card image cap" />
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
} export default Aktivitas;
