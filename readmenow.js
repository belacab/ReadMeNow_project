let Library = [];

function Book(image, description) {
  this.image = image;
  this.description = description;
}

function AddtoLibrary(image, description) {
  let book = new Book(image, description);
  Library.push(book);
}

AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/2DCs73x6P8seNobQ9zBSbO/1a5dfd6ed5fc0ed9545370470fc3d74c/English_Harry_Potter_1_Epub_9781781100219.jpg?w=914&q=70&fm=webp",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id incidunt magnam inesciunt labore hic rerum omnis veniam aliquam rem pariatur similique ipsum dicta earum dolor? Praesentium, nisi aperiam."
);
AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/6VuPUG4wPtmg3xvqwm6ZSn/2465365bae53ac09562f7bcea0b75cb3/English_Harry_Potter_2_Epub_9781781100226.jpg?w=914&q=70&fm=webp",
  "Optio, atque impedit sapiente reprehenderit reiciendis ea expedita dolores aliquam ullamplaceat! Quod nulla nihilculpa illo esse nostrum ducimus aperiam repudiandae perferendis, repellendus id quodistinctio dolor laborequibusdam."
);
AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=webp",
  "Explicabo nam fuga mollitia iure molestias perferendis repellat eum velsit cupiditate accusamus doloremque ea nisiconsequatur minima atque maiores tempore nobis, commodi placeat reiciendis voluptatesdignissimos aliquid? Dicta,autem."
);
AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/3d9kpFpwHyjACq8H3EU6ra/85673f9e660407e5e4481b1825968043/English_Harry_Potter_4_Epub_9781781105672.jpg?w=914&q=70&fm=webp",
  "Explicabo nam fuga mollitia iure molestias perferendis repellat eum velsit cupiditate accusamus doloremque ea nisiconsequatur minima atque maiores tempore nobis, commodi placeat reiciendis voluptatesdignissimos aliquid? Dicta,autem."
);

AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/29op5HEVpvrKK2JKYCsFiO/5b939002fe3611b3f77659df83a76551/English_Harry_Potter_5_Epub_9781781100240.jpg?w=914&q=70&fm=webp",
  "Doloremque facere, reiciendis quia quo dolorem accusantium atquevoluptates libero alias mollitia exercitationemaliquid? Quo quasi repudiandae sapiente expedita nostrum voluptatem rem quis autem tenetur,eius sunt officiis!"
);
AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=webp" ,
    "Laudantium minus porro at, nihil voluptatum ad consequatur nesciunt,facilis velit consectetur dolores accusantium quidem molestias alias nisi sed illum in esse soluta nostrum quibusdam praesentium ipsumficia veniam! Aspernatur"
);
AddtoLibrary(
  "https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=webp",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto nulla at nostrum porro accusantium exercitationem, quod tempore, impedit voluptatum architecto tepora sedreiciendis praesentium consequuntur. Porro consequatur illo magni"
);

function ShowMyLibrary() {
  let booksDiv = document.getElementById("books");
  booksDiv.textContent = "";
  let mybooks = document.createElement("h2");
  mybooks.textContent = "My Books";
  booksDiv.appendChild(mybooks);
  for (let index = 0; index < Library.length; index++) {
    const element = Library[index];
    let bookDiv = document.createElement("div");
    booksDiv.appendChild(bookDiv);
    let image = document.createElement("img");
    image.src = element.image;
    image.className = "cover";
    bookDiv.className = "book";
    bookDiv.appendChild(image);
    let description = document.createElement("p");
    description.textContent = element.description;
    bookDiv.appendChild(description);
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remover libro";
    bookDiv.appendChild(removeBtn);
    removeBtn.onclick = function () {
      Library.splice(index, 1);
      ShowMyLibrary();
    };
  }
}

ShowMyLibrary();

// eslint-disable-next-line no-unused-vars
function showForm() {
  let bookform = document.getElementById("bookform");
  bookform.hidden = false;
  
}

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  let image = document.getElementById("image");
  let description = document.getElementById("description");
  AddtoLibrary(image.value, description.value);
  ShowMyLibrary();
  image.value = "";
  description.value = "";
  let bookform = document.getElementById("bookform");
  bookform.hidden = true;
};
