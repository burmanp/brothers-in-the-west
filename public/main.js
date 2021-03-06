// score counter and player
let score = 100;
let cowboy = "";
let country = "";
// Audio Loader
const circumlocution = new Audio("./sounds/circumlocutions.mp3");
const bombastic = new Audio("./sounds/bombastic.mp3");
const chateau = new Audio("./sounds/chateauneuf-du-pap.mp3");
const queen = new Audio(
  "./sounds/i-have-just-been-to-see-her-majesty-the-queen.mp3"
);
const frankfurters = new Audio("./sounds/frankfurters.mp3");
const happy = new Audio("./sounds/happy-birthday-by-the-way.mp3");
const zingers = new Audio("./sounds/zingers.mp3");
const drugs = new Audio(
  "./sounds/its-probably-true-that-i-have-had-some-drugs.mp3"
);
const pingpong = new Audio("./sounds/ping-pong.mp3");

//buttons selectors
const allBtns = document.querySelectorAll("button");
const btnStart = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next-btn");
const btnGroups = document.querySelectorAll(".btn-group");
const saloonBtns = document.querySelectorAll(".p1-buttons button");
const p1BtnOne = document.querySelector(".p1-btn-1");
const p1BtnTwo = document.querySelector(".p1-btn-2");
const p1BtnThree = document.querySelector(".p1-btn-3");
const redheadYesBtn = document.querySelector(".redhead-yes");
const redheadNoBtn = document.querySelector(".redhead-no");
const anotherDrinkBtn = document.querySelector(".bar-yes");
const saveBorisBtn = document.querySelector(".bar-no");
const allcards = document.querySelectorAll(".my-cards");
const spadesBtn = document.querySelector(".spades");
const clubsBtn = document.querySelector(".clubs");
const diamondsBtn = document.querySelector(".diamonds");
const heartsBtn = document.querySelector(".hearts");
const saloonEndBtn = document.querySelector(".saloon-end-btn");
const depBtns = document.querySelectorAll(".dep-buttons button");
const bribeBtn = document.querySelector(".bribe");
const distractBtn = document.querySelector(".distract");
const finalBtn = document.querySelector(".btn-final");
const replayBtnLose = document.querySelector(".replay-btn-lose");
const navLink = document.querySelector(".nav-link");

//classes selectors for articles and divs etc
const welcome = document.querySelector(".welcome");
const geoCity = document.querySelector(".geo-city");
const intro = document.querySelector(".set-up");
const ride = document.querySelector(".ride");
const p1 = document.querySelector(".p1");
const saloon = document.querySelector(".saloon");
const redhead = document.querySelector(".redhead");
const redheadIntro = document.querySelector(".redhead-intro");
const redheadEnd = document.querySelector(".redhead-end");
const bar = document.querySelector(".bar");
const barIntro = document.querySelector(".bar-intro");
const barEnd = document.querySelector(".bar-end");
const myMan = document.querySelector(".my-man");
const myManIntro = document.querySelector(".my-man-intro");
const myManNext = document.querySelector(".my-man-next");
const myManEnd = document.querySelector(".my-man-end");
const sheriff = document.querySelector(".sheriff");
const sheriffIntro = document.querySelector(".sheriff-intro");
const sheriffEnd = document.querySelector(".sheriff-end");
const getBoris = document.querySelector(".get-boris");
const sunset = document.querySelector(".sunset");
const deadSection = document.querySelector(".dead-article");
const allArticles = document.querySelectorAll("article");
const allArticleBlocks = document.querySelectorAll("article > div");
const reload = document.querySelector(".reload");
const chapter1 = document.querySelector(".intro");

// show / hide and other functions

const nameCheck = (name) => {
  const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (name.length < 1 || special.test(name[0]) || !isNaN(name[0])) {
    alert("Name must not start with a number or special character!");
    return;
  }
  return name;
};

const showRide = () => {
  ride.style.display = "block";
};

function showP1() {
  showText(p1);
  hideText(intro);
  hideText(ride);
  setTimeout(showBtn, 1000); //4000 later
}

const showBtn = () => {
  btnGroups.forEach((btns) => {
    btns.style.visibility = "visible";
  });
};

function showText(selector) {
  selector.style.display = "block";
}

function hideText(selector) {
  selector.style.display = "none";
}

function killButtons(buttons) {
  buttons.forEach((btn) => {
    if (btn.disabled === false) {
      btn.disabled = true;
    }
  });
}

function unkillButtons(buttons) {
  buttons.forEach((btn) => {
    if (btn.className !== "start-btn") {
      if (btn.disabled === true) {
        btn.disabled = false;
      }
    }
  });
}

function pickTwoCards() {
  const goodPick1 = Math.ceil(Math.random() * 2);
  const goodPick2 = Math.ceil(Math.random() * 2) + 2;

  allcards.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(goodPick1, "or", goodPick2);
      const btnNum = i + 1;
      if (btnNum === goodPick1 || btnNum === goodPick2) {
        bombastic.play();
        showText(myManNext);
        hideText(myManIntro);
        score--;
        console.log(score);
        return;
      } else {
        drugs.play();
        myManEnd.innerText = `You had 50/50 chance and yet you've picked ${btn.innerText}
        Rotten luck cowpoke! `;
        hideText(myManIntro);
        showText(deadSection);
        score--;
        console.log(score);
        return;
      }
    });
  });
}

function resetAllText() {
  allArticles.forEach((selector) => {
    selector.style.display = null;
  });
  allArticleBlocks.forEach((selector) => {
    selector.style.display = null;
  });
}

///////////////// Main ///////////////

window.addEventListener("DOMContentLoaded", (e) => {
  main();
  console.log("DOM fully loaded and parsed");
});

async function main() {
  btnStart.addEventListener("click", (e) => {
    e.preventDefault();
    const cowboyName = document.querySelector("#name-input").value;

    if (nameCheck(cowboyName)) {
      bombastic.play();
      console.log(cowboyName);
      welcome.innerText = `${cowboyName}`;
      fetchGeo();
      showRide();
      btnStart.disabled = true;
      cowboy = cowboyName;
      return cowboy;
    }
  });

  nextBtn.addEventListener("click", showP1);

  p1BtnOne.addEventListener("click", () => {
    queen.play();
    showText(redhead);
    hideText(redheadEnd);
    killButtons(saloonBtns);
    score--;
    console.log(score);
  });

  p1BtnTwo.addEventListener("click", () => {
    chateau.play();
    showText(bar);
    hideText(barEnd);
    killButtons(saloonBtns);
    score--;
    console.log(score);
  });

  p1BtnThree.addEventListener("click", () => {
    zingers.play();
    hideText(myManNext);
    hideText(p1);
    showText(myMan);
    killButtons(saloonBtns);

    pickTwoCards();
    score--;
    console.log(score);
  });

  redheadYesBtn.addEventListener("click", () => {
    happy.play();
    showText(redheadEnd);
    showText(deadSection);
    hideText(redheadIntro);
    hideText(p1);
    score--;
    console.log(score);
  });

  redheadNoBtn.addEventListener("click", () => {
    frankfurters.play();
    hideText(redheadIntro);
    showP1;
    unkillButtons(saloonBtns);
    score--;
    console.log(score);
  });

  anotherDrinkBtn.addEventListener("click", () => {
    pingpong.play();
    showText(barEnd);
    showText(deadSection);
    hideText(barIntro);
    hideText(p1);
    score--;
    console.log(score);
  });

  saveBorisBtn.addEventListener("click", () => {
    bombastic.play();
    hideText(barIntro);
    hideText(p1);
    showText(myMan);
    hideText(myManNext);
    score--;
    console.log(score);
    pickTwoCards();
  });

  saloonEndBtn.addEventListener("click", () => {
    hideText(chapter1);
    resetAllText();
    showText(sheriff);
    hideText(sheriffEnd);
  });

  bribeBtn.addEventListener("click", () => {
    circumlocution.play();
    hideText(sheriffIntro);
    showText(sheriffEnd);
    showText(deadSection);
    score--;
    console.log(score);
  });

  distractBtn.addEventListener("click", () => {
    bombastic.play();
    showText(getBoris);
    hideText(sheriffIntro);
    score--;
    console.log(score);
  });

  finalBtn.addEventListener("click", () => {
    const chapter2 = document.querySelector(".chapter2");
    hideText(chapter2);
    showText(sunset);
    console.log(score);
    console.log(cowboy);
  });

  replayBtnLose.addEventListener("click", (e) => {
    score -= 10;
    console.log(score);
    unkillButtons(allBtns);
    resetAllText();
    hideText(deadSection);
    showP1();
  });

  const players = await fetchTopPlayers();
  updateTable(players);
}

// PUBLIC api fetch and usage
async function fetchGeo() {
  const res = await fetch("https://api.techniknews.net/ipgeo/");
  const { city, countryCode } = await res.json();
  useGeo(city, countryCode);
}

function useGeo(city, countryCode) {
  welcome.innerText += ` rides to ${city}, ${countryCode}`;
  geoCity.innerText = `${city}`;
  country = countryCode;
  return country;
}

// OWN api fetch and usage
async function fetchAllPlayers() {
  const response = await fetch("/players");
  const data = await response.json();
  const allPlayers = data.payload;
  return allPlayers;
}

async function fetchTopPlayers() {
  const response = await fetch("/players/top10");
  const data = await response.json();
  const topPlayers = data.payload;
  return topPlayers;
}

async function updateTable(players) {
  const table = document.querySelector("table");
  const totalRows = table.rows.length;

  for (let i = totalRows - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  players.forEach((player) => {
    const row = document.createElement("tr");

    const playerId = document.createElement("td");
    playerId.innerText = player.id;
    row.append(playerId);

    const playerName = document.createElement("td");
    playerName.innerText = player.cowboy;
    row.append(playerName);

    const playerScore = document.createElement("td");
    playerScore.innerText = player.score;
    row.append(playerScore);

    const time = document.createElement("td");
    time.innerText = player.time;
    row.append(time);

    const zone = document.createElement("td");
    zone.innerText = player.zone;
    row.append(zone);

    table.append(row);
  });
}

async function addNewPlayer(e) {
  e.preventDefault();

  const d = new Date();
  const time = `${d.getDate()}-${
    d.getMonth() + 1
  }-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const zone = country;

  const dataObj = { cowboy, score, time, zone };

  await fetch("/players", {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: {
      "Content-type": "application/json",
    },
  });
}

finalBtn.addEventListener("click", addNewPlayer);

navLink.addEventListener("click", async () => {
  const players = await fetchTopPlayers();
  updateTable(players);
});

reload.addEventListener("click", () => {
  location.reload();
});
