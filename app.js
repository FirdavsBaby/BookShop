const sec = document.querySelector(".section");

const data = [
  {
    id: 1,
    title: "Umrning bir lahzasi!",
    description: "Inson umir va hayot yo'liga bag'ishlanadi.",
    price: 9000,
    status: "cheep",
  },
  {
    id: 2,
    title: "Baxtiyor oila!",
    description: "Islomi hayot va oila.",
    price: 150000,
    status: "expensive",
  },
  {
    id: 3,
    title: "Otamdan qolgan dalalar.",
    description: "Insoniylik.",
    price: 50000,
    status: "middle",
  },
  {
    id: 4,
    title: "Ilm olish sirlari!",
    description: "Ilm olish siralari islomiy shakilda.",
    price: 100000,
    status: "expensive",
  },
  {
    id: 5,
    title: "Yulduzli tunlar!",
    description: "Yaxshi kitob bo'lsa kerak.",
    price: 6000,
    status: "cheep",
  },
  {
    id: 6,
    title: "Kichkina shahzoda",
    description: "Filni yutayotgan ilon yohut shlyapa mash-mashalari.",
    price: 80000,
    status: "middle",
  },
];

function create_card(title, desk, price) {
  const card = document.createElement("div");
  const top_div = document.createElement("div");
  const bot_div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  sec.append(card);
  card.className = "card";
  card.append(top_div);
  top_div.className = "top";
  top_div.append(h2);
  h2.textContent = "BOOKS";

  card.append(bot_div);
  bot_div.className = "bottom";
  bot_div.append(h3);
  h3.textContent = title;
  bot_div.append(p);
  p.textContent = desk;

  bot_div.append(p2);
  p2.textContent = `Price: ${price} so'm`;
  return card;
}

let total = document.querySelector("#dolars");

function getCards(arr) {
  let totalPrice = 0;
  for (let i = 0; i < arr.length; i++) {
    totalPrice = totalPrice + arr[i].price;
    sec.append(create_card(arr[i].title, arr[i].description, arr[i].price));
    total.textContent = totalPrice;
  }
}
getCards(data);

let all_books = document.querySelector(".all-books");
let expen = document.querySelector(".expensive");
let cheep = document.querySelector(".cheep");
let middle = document.querySelector(".middle");
let filterTitle = document.querySelector(".filter_title");
all_books.addEventListener("click", () => {
  filterTitle.textContent = "All books";
  innerHTML = "";
  getCards(data);
});
expen.addEventListener("click", () => {
  filterTitle.textContent = "Expensive Books";
  let Arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].status == "expensive") {
      Arr.push(data[i]);
    }
  }
  sec.innerHTML = "";
  getCards(Arr);
});

cheep.addEventListener("click", () => {
  filterTitle.textContent = "Cheep Books";
  let Arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].status == "cheep") {
      Arr.push(data[i]);
    }
  }
  sec.innerHTML = "";
  getCards(Arr);
});
middle.addEventListener("click", () => {
  filterTitle.textContent = "Middle Books";
  let Arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].status == "middle") {
      Arr.push(data[i]);
    }
  }
  sec.innerHTML = "";
  getCards(Arr);
});

let price_search = document.querySelector("#price");

let min = document.querySelector(".btn-1");
let max = document.querySelector(".btn-2");

min.addEventListener("click", () => {
  let min_max = [];
  sec.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (price_search.value < data[i].price) {
      min_max.push(data[i]);
    }
  }
  sec.innerHTML = "";
  getCards(min_max);
});

max.addEventListener("click", () => {
  let min_max = [];
  sec.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (price_search.value >= data[i].price) {
      min_max.push(data[i]);
    }
  }
  sec.innerHTML = "";
  getCards(min_max);
});

let type = document.querySelector("#type");
let search_button = document.querySelector("#search");

type.addEventListener("input", (e) => {
  let typed = e.target.value
  let search = data.filter((i) =>
    i.title.toLowerCase().includes(typed.toLowerCase())
  );
  sec.innerHTML = ""
  getCards(search)
});
