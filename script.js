const animeList = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");

const fetchAnime = async (query = "naruto") => {
  animeList.innerHTML = "<p>Loading...</p>";
  const res = await fetch(`https://api.consumet.org/meta/anilist/${query}`);
  const data = await res.json();

  animeList.innerHTML = "";
  data.results.forEach(anime => {
    const div = document.createElement("div");
    div.className = "animeCard";
    div.innerHTML = `
      <img src="${anime.image}" alt="${anime.title.romaji}">
      <h3>${anime.title.romaji}</h3>
      <p>${anime.status}</p>
    `;
    animeList.appendChild(div);
  });
};

searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  if (query.length > 2) fetchAnime(query);
});

fetchAnime();
