import { Component } from "react";
import './Productos.css';

const list = [
    {
        id:1,
        descripcion:'PC Samsung',
        precio:2800000,
    },
    {
        id:2,
        descripcion:'PC Asus',
        precio:2300000,
    },
    {
        id:3,
        descripcion:'Mackbook air ml',
        precio:4300000,
    },
    {
        id:4,
        descripcion: 'Tablet Samsung',
        precio:2699900,
    },
    {
        id:5,
        descripcion: 'iPhone 13 Pro',
        precio:534096000

    }
]; 
function Buscar(nombreProducto){
    return function(item) {
        return item.descripcion.toLowerCase().includes(nombreProducto.toLowerCase())
    }
}

class Productos extends Component {
    constructor(props) {
        super(props);

        this.state={
            list,
            nombreProducto: '',
        };

        this.Eliminar = this.Eliminar.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    Eliminar(id) {
        const isNotId = item => item.id !== id;
        const listaActualizada = this.state.list.filter(isNotId);
        this.setState({ list: listaActualizada});
    };

    onSearchChange(event){
        this.setState({nombreProducto: event.target.value})
    }

    render() {
        return (
           <div className="content"> 
                <h2 >Lista de Productos</h2>
                <label>Buscar productos</label> 
                <input  tipe="text"  onChange={this.onSearchChange}></input>
             
                <div className='tabla'>        
                    <table className="table table-striped table-bordered">
                        <th className="bg-success text-white">Descripción  Producto</th>
                        <th className="bg-success text-white">Precio</th>
                        <th className="bg-success text-white">Eliminar Producto</th>
                                {
                                    this.state.list.filter(Buscar(this.state.nombreProducto)).map  (item =>
                                    <tbody key={item.id}>
                                        <tr>
                                            <td>
                                                {
                                                    item.descripcion
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.precio
                                                }
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => this.Eliminar(item.id)}
                                                    type="button"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody> 
                                        
                                    )}
                                
                    </table>
                </div>
            </div>
        );
    };
};

export default Productos;