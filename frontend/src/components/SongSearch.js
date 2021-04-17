import React, {useState} from 'react'
import Authenticate from '../utils/Authenticate'
import axios from 'axios'
import { Link } from 'react-router-dom';
import SingleSong from './singleSong';


export default function SearchingBar() {

    const [keyWord, getValue] = useState('');

    const token = Authenticate();

    const getInputValue = (e) => {
        getValue(e.target.value);
    }

    const [answear, data] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if(keyWord){
            const res = await axios.get(`http://localhost:4000/home/${keyWord}/${token}`);
            data(res.data)
        }else{
            alert("datos incorrectos");
        }
    }
    
    const renderListOfSongs = () => {
        if(answear.length > 0){
            return listOfSongs;
        }else{
            return error;
        }
    }
    /////////////////////////////////////////////////////////////////////////////

    const [songDetails, setSongDetails] = useState(null)

    const songInfo = async (e) => {
        e.preventDefault();
        let songId = e.currentTarget.parentNode.getAttribute('id')
        let songName = e.currentTarget.parentNode.getAttribute('songName')
        let songUrl = e.currentTarget.parentNode.getAttribute('songUrl');
        let popularity = e.currentTarget.previousElementSibling.innerHTML;
        let songImage = e.currentTarget.firstElementChild.firstElementChild.src;
        setSongDetails({
            songId,
            songName,
            songUrl,
            popularity,
            songImage
        });
    }


    if(songDetails){
        return (
            <div>
                <SingleSong onSelectSong={songDetails} />
            </div>
        )
    }

//////////////////////////////////////////////////////////////////////////////////
    const listOfSongs = (
        
        <div className= "d-flex flex-wrap justify-content-between mt-5">
        {
            answear.map(item => {
                return(
                    <div key={item.name} className="cardSongs card mb-4 position-relative" id={item.id} songname={item.name} songurl={item.album.external_urls.spotify}>
                        <h6 className="position-absolute bg-primary p-2 text-white popularity">Popularity {item.popularity}</h6>
                        <Link onClick={songInfo} href='/singleSong' className="text-decoration-none">
                            <div>
                                <img src={item.album.images[0].url} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title mb-0 d-flex overflow-hidden title">{item.name}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    </div>
    )


    const error = (
        <div class="alert alert-primary mt-5 rounded-0" role="alert">
            Todavia no has buscado nada o la busqueda no arroja resultados prueba con otras palabras.
        </div>
    )

    return (
        <div className="container mt-5">
            <form className="d-flex" onSubmit={onSubmit}>
                <input type="text"
                    id="inputPassword5"
                    className="form-control border-end-0 rounded-0"
                    value={keyWord}
                    autocomplete="off"
                    placeholder= "What song are you looking for?"
                    onChange={getInputValue}>
                </input>
                <button type='submit' className="btn btn-info rounded-0 pl-5 pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </form>
            {renderListOfSongs()}
        </div>
    )
}

