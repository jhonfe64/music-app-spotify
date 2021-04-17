import {React, useEffect} from 'react';
import Authenticate from '../utils/Authenticate';

export default function WellcomeMessage() {
const  tokenFunction = Authenticate();

return (
        <div className="row pt-5" id="welcomeMessage">
            <div className="col-12 d-flex justify-content-center">
                <div className="messageCard">
                    <div className="card-body p-5 text-white">
                        <h1 className="card-title text-center mb-4">Spotify Music is here</h1>
                        <h4 className="text-center">you are being redirected to spotify login page</h4>
                        <div className="text-center">
                            <div class="spinner-grow text-primary text-center mt-4" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-secondary" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-danger" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-warning" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-info" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-light" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                            <div class="spinner-grow text-dark" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
