import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {CartContext} from '../../CartContext';
    function HomePage() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Sistem Informasi Perpustakaan </h1>
                    <p className="lead">Selamat datang di sistem informasi Perpustakaan.</p>
                    <hr className="my-2" />
                    <p>Silahkan Login terlebih dahulu untuk dapat menikmati fasilitas layanan kami.</p>
                    <p className="lead">
                        <Button color="primary">Login</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
export default HomePage;