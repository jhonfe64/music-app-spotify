import React from 'react'
import {Link} from 'react-router-dom';

export default function header() {
    return (
        <div className="bg-white pt-4 pb-4 shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="text-dark text-decoration-none" to="/">
                    <h4 className="mb-0">Music Mix</h4>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-music-note-list mb-0" viewBox="0 0 16 16">
                    <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                    <path d="M12 3v10h-1V3h1z"/>
                    <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                    <path d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
        </div>
    )
}
