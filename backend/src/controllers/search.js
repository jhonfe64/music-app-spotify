const fetch = require('node-fetch');
const ctrl = {}

ctrl.search = (req, res) => {
    var keyword = req.params.keyword;
    let token = req.params.token;
    console.log(keyword);
    console.log(token);

  fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=24`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => response.json())
      .then((ans)=>{
        const listSongs = ans.tracks.items;
        res.send(listSongs)
      }).catch((err)=>{
        console.log(err);
  })
}



module.exports = ctrl;