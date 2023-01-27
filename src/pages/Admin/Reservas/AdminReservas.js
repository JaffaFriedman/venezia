import {db} from '../../../config/Firebase'
import { useState, useEffect } from "react";
import { collection, detDocs } from "firebase/firestore";
import { Table, Button } from "react-bootstrap"
const AdminReservas = () => {

    const valorIncial = {
        restoran: '',
        comensal: '',
        fecha: '',
        horario: '',
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
    }

    //Variables de estados

    const [reservas, setReservas] = useState([]);
    const collectionRef=collection(db,"Reservas");
    const response= await getDocs(collectionRef);
    const con
    useEffect (()=>
        const getReservas = async()
    
        )
        
        const getReservas = async()
    )
 
    const cathInputs = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const reservarMesa = async(e) => {
        e.preventDefault()
        try {
            const collectionRef = collection(db, 'Reservas')
            await addDoc(collectionRef, {
                ...user
            })
        } catch (error) {
            console.log(error)
        }
        setUser({...valorIncial})
    }

  return (
    <div>
        <div>
        <h2>Reservas</h2>
            {/* Formulario */}
            <div>
                <form onSubmit={reservarMesa}>
                    <div>
                        <div>
                            <input type='text' name='name' className="form-control mb-3" placeholder="Ingresa tu nombre" onChange={cathInputs} value={user.name}/>
                            <input type='text' name='email' className="form-control mb-3" placeholder="Ingresa tu email" onChange={cathInputs} value={user.email}/>
                            <input type='text' name='fecha' className="form-control mb-3" placeholder="Elige una fecha de reserva" onChange={cathInputs} value={user.fecha}/>
                            <input type='number' name='mesa' className="form-control mb-3" placeholder="Elige tu mesa" onChange={cathInputs} value={user.mesa}/>
                        </div>
                        <button className="btn btn-primary">Reservar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminReservas