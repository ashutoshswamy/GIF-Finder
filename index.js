function showGIF() {
  const search = document.getElementById("input").value;
  const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(
    search
  )}&key=AIzaSyBxugdPL_0eWWSGdMVhxa4-9aGXNtoDGto&limit=20`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const img = document.getElementById("img");
      const link = document.getElementById("giflink");
      const href = document.getElementById("gifhref");
      const orglink = document.getElementById("giforglink");
      const orghref = document.getElementById("giforghref");
      const random = Math.floor(Math.random() * 20);
      img.src = data.results[random].media_formats.gif.url;
      img.width = 375;
      link.innerHTML = "GIF Link";
      href.href = data.results[random].url;
      orglink.innerHTML = "Original Size GIF";
      orghref.href = data.results[random].media_formats.gif.url;
    });
}
