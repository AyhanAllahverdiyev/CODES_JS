const generateMemeBtn = document.querySelector(
  ".meme_generator.generate_meme_btn"
);
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator.meme-title");
const memeAuthor = document.querySelector(".meme_generator.meme-author");
const uptadeDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};

const generateMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememems")
    .then((response) => response.json())
    .then((data) => {
      uptadeDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme());
