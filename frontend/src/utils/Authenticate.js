export default function Authenticate() {
    let token = window.location.hash.substr(1);
    if(token) {
        const tk = Object.fromEntries(new URLSearchParams(token));
        return tk.access_token;
    }else{
        setTimeout(() => {
            redirectToSpotifyAuthentication();
        },4000);
        
    }
}


    function redirectToSpotifyAuthentication() {
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const clientId = 'b88799f29a3a473fa100004e82650e7d';
        const redirectUri = 'http://localhost:3000/home';
        let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
        window.location = `${authEndpoint}?${query}`;
    }
    
