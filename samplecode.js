// write a function to retrieve a blob of json
// make a json request using fetch function
// https://rallycoding.herokuapp.com/api/music_albums

/* function fetchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}
*/
async function fetchAlbums() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums")
  const json = await (res => res.json());
  
  console.log(json);
}

fetchAlbums();