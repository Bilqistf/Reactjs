import React, { Component } from 'react' 
import './CSS/Produk.css';
class Produk extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disable: false
        }
    }
    ButtonBeli = () => {
        this.setState ({ 
            stock: this.state.stock -1

        })

        if(this.state.stock ===1){
 
            this.setState({ 
                status:"Habis",
                disabled : true
            })
 
        }

    }
    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="data:image/jpeg;base64,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" alt="" />
                <p><b>Rp{this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}
                </p>
            </div>
        )
    }
} 
export default Produk