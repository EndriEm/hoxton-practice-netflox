import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

type Movie = {
  id: number;
  title: string;
  Thumbnail: string;
  description: string;
  comments: string;
  clicked: boolean;
};

type State = {
  movies: Movie[];
  selectedMovie: Movie | null;
};

let state: State = {
  movies: [
    {
      id: 1,
      title: "Gladiator",
      Thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      description: "Drama",
      comments: "Amazing",
      clicked: true,
    },

    {
      id: 2,
      title: "The Usual Suspects",
      Thumbnail: "https://m.media-amazon.com/images/I/517NYZ62HAL._SY445_.jpg",
      description: "Action-Thriller",
      comments: "Intriguing",
      clicked: true,
    },

    {
      id: 3,
      title: "MI:2",
      Thumbnail:
        "https://i.pinimg.com/236x/3c/ed/aa/3cedaa42edc0a56bc272e565c5c7ac28--movie-cars-mission-impossible.jpg",
      description: "Action",
      comments: "lorem ipsum",
      clicked: true,
    },

    {
      id: 4,
      title: "The next 3 days",
      Thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/The_Next_Three_Days_Poster.jpg/220px-The_Next_Three_Days_Poster.jpg",
      description: "Action-Drama",
      comments: "lorem",
      clicked: true,
    },
  ],

  selectedMovie: null,
};


function render() {
  
  app.textContent = "";

 for (let movie of state.movies) {
  let imgEl = document.createElement("img");
  imgEl.className = `image${movie.id}`;
  app.append(imgEl);
  imgEl.src = movie.Thumbnail;
    imgEl.addEventListener("click", function () {
      state.selectedMovie = movie
      render();
    });

  }
}

render();



