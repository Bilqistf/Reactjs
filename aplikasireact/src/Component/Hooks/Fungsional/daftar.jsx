import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const daftar = () => {

        return (
            <div className="container" style = {{marginTop:"50px"}}>
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <Col sm="8" md={{ size: 'auto', offset: 3 }}><h2>Registrasi </h2></Col>
                            <form>
                            <div className="form-group">
                                    <label >Nama </label>
                                    <input type="namalengkap" className="form-control"  placeholder="Masukan Nama Lengkap" />
                                </div>
                                <div className="form-group">
                                    <label >NIK </label>
                                     <input type="nik" className="form-control"  placeholder="Masukan NIK" />
                                </div>
                                
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control"  placeholder="Masukan Nama Email" />
                                </div>
                                <div className="form-group">
                                    <label >Nomer Handphone</label>
                                    <input type="nomor" className="form-control"  placeholder="Masukan Nomer Handhphone" />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control"  placeholder="Masukan Nama Password" />
                                </div>
                                <div className="form-group">
                                    <label >verifikasi password</label>
                                    <input type="verifikasipassword" className="form-control"  placeholder="verifikasi password" />
                                </div>
                                
                                    <button type="submit" class="btn btn-primary  btn-block">Registrasi</button> 

                                    <Link to="/masukuser" button type="submit" class="btn btn-primary btn-block">batal</Link> 

                            </form>
                        </div>
                </div>
                </div>
         );
    }

export default daftar;