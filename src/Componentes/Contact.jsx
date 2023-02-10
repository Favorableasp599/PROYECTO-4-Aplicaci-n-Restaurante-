import React, {useState} from 'react'
import {db} from "../firebase"
import {collection,getDocs,addDoc} from 'firebase/firestore'

const initialForm = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  info:''
}

function Contact() {

  const [pedidos,setPedidos] = useState([])
  const [form, setForm] = useState(initialForm)

  const getPedido = async () => {
    const respuesta = await getDocs(collection(db, 'Pedidos'))
    const data = respuesta.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setPedidos(data)
    console.log(data)
  }
  

  const createform = async () => {
    const coleccion = collection(db, 'Pedidos',)
    addDoc(coleccion, form)
    getPedido()
  }
  

  return (
    <div id="contact">
        <h1>Reserva con nosotros</h1>
        <form>
        <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre"
                    autoComplete="off"
                    className="form-control"
                    value={form.nombre}
                    onChange={(e) => {
                      setForm({ ...form, nombre: e.target.value });
                    }}
                  />
             <input
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    autoComplete="off"
                    className="form-control"
                    value={form.apellido}
                    onChange={(e) => {
                        setForm({ ...form, apellido: e.target.value });
                    }}
                    />
            <input
                    id="telefono"
                    type="text"
                    placeholder="Telefono"
                    autoComplete="off"
                    className="form-control"
                    value={form.telefono}
                    onChange={(e) => {
                        setForm({ ...form, telefono: e.target.value });
                    }}
                    />
            <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    className="form-control"
                    value={form.email}
                    onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                    }}
                    />
            <textarea id="info"
                    type="text"
                    placeholder="Mensaje y Comentarios"
                    autoComplete="off"
                    className="form-control"
                    value={form.info}
                    onChange={(e) => {
                        setForm({ ...form, info: e.target.value });
                    }}/>
           <button
                    className="btn btn-primary btn-block mt-2"
                    onClick={async (e) => {
                        e.preventDefault();
                        await createform();
                        setForm(initialForm);
                    }}
                    >
                    Agregar
                    </button>
        </form>
         
    </div>
  )
}

export default Contact