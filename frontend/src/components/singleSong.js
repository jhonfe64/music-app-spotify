import React from 'react'

export default function SingleSong(props) {
    console.log(props.onSelectSong.songId);
    return (
        <div id="singleSong" className="mt-5">
            <div className="container d-flex p-5 flex-wrap">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid shadow" src={props.onSelectSong.songImage} alt=""/>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <div>
                        <div className="d-flex justify-content-center mt-5 mt-lg-0">
                            <h5 className="bg-dark text-white d-inline p-1 rounded pt-1 pb-2 pr-3 pl-3">{props.onSelectSong.popularity}</h5>
                        </div>
                        <h1 className="mt-4 text-center">{props.onSelectSong.songName}</h1>
                        <div className="d-flex justify-content-center">
                            <a href={`${props.onSelectSong.songUrl}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="playButton" className="bi bi-play-circle mt-5" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
