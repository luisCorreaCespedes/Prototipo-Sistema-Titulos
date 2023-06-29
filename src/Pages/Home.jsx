// Declaración de importaciones
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ref, onValue, getDocs, collection, doc, getFirestore, addDoc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import appFirebase from '../Firebase/firebase';
import Navbar from '../Components/Navbar';
import BuscadorPrincipal from '../Components/BuscadorPrincipal';
import BACKGROUND from '../Assets/fondoUtem.png';
import Footer from '../Components/Footer';
import DONE from '../Assets/done.png';
import '../Styles/Home.css';
import '../Styles/Buscador.css';
import '../Styles/DocumentoTitulo.css';

// Declaración de BDD Firebase (Firestorage Database)
const db = getFirestore(appFirebase);

// Función principal HOME
function Home() {

    // Importación de librería de REACT-PDF
    //href={list.document} target='_blank' rel='noreferrer
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // Declaración de métodos useState
    const [lista, setLista] = useState([]);

    // Declaración de métodos useEffect
    useEffect( () => {
        const getLista = async() => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Documents'))
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id:doc.id})
                });
                setLista(docs)
            } catch (error) {
                console.log(error)
            }
        };
        getLista();
    }, [lista]);
    
    // Retorno de la función HOME
    return (
        <div className='bg-repeat' style={{ backgroundImage: `url(${BACKGROUND})`}}>

            <Navbar />
            <BuscadorPrincipal />
            
            <div className='contenedorResultados'>
                <container className='estilosResultados'>
                    { lista.length === 0 ?
                        <h3 className='estiloTexto font-semibold'> Nada para mostrar</h3> : <h3 className='estiloTexto font-semibold'> Todos los Documentos</h3>
                    }
                    <hr className='separadorResultados' />
                </container>
            </div>

            <div className='contenedorDocumentos'>
                <div className='gridDocumentos'>
                {
                    lista.map((list, index) => (
                        <div key={list.id}>
                            <div className="estiloCarta">
                                <div className='estiloPortada'>
                                    <Document file={list.document} loading={'Cargando PDF...'} error={'Cargando PDF...'}>
                                        <Page pageNumber={1} width={130} renderAnnotationLayer={false} renderTextLayer={false} loading={'Cargando Portada'}/>
                                    </Document>
                                </div>
                                <div className='estiloInformacion'>
                                    <h2 className='textoTitulo'>{list.title}</h2>
                                    <h2 className='textoInfo'>ESTUDIANTE: <p className='pl-2 font-normal'>{list.student}</p> </h2>
                                    <h2 className='textoInfo'>PROFESOR GUÍA: <p className='pl-2 font-normal'>{list.teacher}</p> </h2>
                                    <h2 className='textoInfo'>AÑO: <p className='pl-2 font-normal'>{list.year}</p> </h2>
                                    <h2 className='textoInfo'>CARRERA: <p className='pl-2 font-normal'>{list.career}</p> </h2>
                                    <h2 className='textoInfo'>MODALIDAD: <p className='pl-2 font-normal'>{list.mode}</p> </h2>
                                </div>
                                
                            </div>
                            
                        </div>
                    ))
                }
              
                </div>
            </div>

            <Footer />
            
        </div>
    )
}


export default Home;