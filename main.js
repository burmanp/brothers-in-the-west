// score counter
let score = 0;
// Audio Loader
const bombastic = new Audio("./sounds/bombastic.mp3");

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
    if (btn.disabled === true) {
      btn.disabled = false;
    }
  });
}

function pickTwoCards() {
  const goodPick1 = Math.ceil(Math.random() * 2);
  const goodPick2 = Math.ceil(Math.random() * 2) + 2;

  allcards.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(goodPick1, " ", goodPick2);
      const btnNum = i + 1;
      if (btnNum === goodPick1 || btnNum === goodPick2) {
        showText(myManNext);
        killButtons(allcards);
        score++;
      } else {
        myManEnd.innerText = `You had 50/50 chance and yet you've picked ${btn.innerText}
        Rotten luck cowpoke! `;
        hideText(myManIntro);
        showText(deadSection);
      }
    });
  });
}

// function replayGame() {
//   allArticles.forEach((article) => {
//     if (article.className === "p1") {
//       showText(article);
//     } else hideText(article);
//   });
//   showP1();

//   // document.body.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }

///////////////// Main ///////////////

window.addEventListener("DOMContentLoaded", (e) => {
  main();
  console.log("DOM fully loaded and parsed");
});

function main() {
  btnStart.addEventListener("click", (e) => {
    e.preventDefault();
    const cowboyName = document.querySelector("#name-input").value;
    if (nameCheck(cowboyName)) {
      // bombastic.play();
      console.log(cowboyName);
      welcome.innerText = `${cowboyName}`;
      fetchGeo();
      showRide();
      btnStart.disabled = true;
    }
  });

  nextBtn.addEventListener("click", showP1);

  p1BtnOne.addEventListener("click", () => {
    showText(redhead);
    hideText(redheadEnd);
    killButtons(saloonBtns);
    score++;
  });

  p1BtnTwo.addEventListener("click", () => {
    showText(bar);
    hideText(barEnd);
    killButtons(saloonBtns);
    score++;
  });

  p1BtnThree.addEventListener("click", () => {
    showText(myMan);
    hideText(myManNext);
    killButtons(saloonBtns);

    pickTwoCards();
    score++;
  });

  redheadYesBtn.addEventListener("click", () => {
    showText(redheadEnd);
    showText(deadSection);
    hideText(redheadIntro);
    hideText(p1);
    score++;
  });

  redheadNoBtn.addEventListener("click", () => {
    hideText(redheadIntro);
    showP1;
    unkillButtons(saloonBtns);
    score++;
  });

  anotherDrinkBtn.addEventListener("click", () => {
    showText(barEnd);
    showText(deadSection);
    hideText(barIntro);
    hideText(p1);
    score++;
  });

  saveBorisBtn.addEventListener("click", () => {
    hideText(barIntro);
    hideText(p1);
    showText(myMan);
    hideText(myManNext);
    score++;
    pickTwoCards();
  });

  saloonEndBtn.addEventListener("click", () => {
    const chapter1 = document.querySelector(".chapter1");
    hideText(chapter1);
    showText(sheriff);
    hideText(sheriffEnd);
  });

  bribeBtn.addEventListener("click", () => {
    hideText(sheriffIntro);
    showText(sheriffEnd);
    killButtons(depBtns);
    showText(deadSection);
    score++;
  });

  distractBtn.addEventListener("click", () => {
    showText(getBoris);
    hideText(sheriffIntro);
    score++;
  });

  finalBtn.addEventListener("click", () => {
    const chapter2 = document.querySelector(".chapter2");
    hideText(chapter2);
    showText(sunset);
    console.log(score);
  });

  replayBtnLose.addEventListener("click", (e) => {
    score += 10;
    unkillButtons(allBtns);
    console.log(allBtns);
    allArticles.forEach((article) => {
      hideText(article);
      return;
    });
    hideText(deadSection);
    showP1();
  });
}

// API fetch and usage
async function fetchGeo() {
  const res = await fetch("https://api.techniknews.net/ipgeo/");
  const { city } = await res.json();
  useGeo(city);
  return city;
}

function useGeo(city) {
  welcome.innerText += ` rides to ${city}`;
  geoCity.innerText = `${city}`;
}
