const mainPage = document.querySelector("#mainPage");
const qnaPage = document.querySelector("#qnaPage");

let qCount = 0;

function addAnswer(alist, qIdx) {
  let aBox = document.querySelector(".answerBox");

  const arr = [];
  alist.forEach((item) => {
    const button = document.createElement("button");
    button.innerHTML = item.answer;
    button.classList.add("mt-3", "py-2")
    button.addEventListener("click", () => {
      goNext(++qIdx);
    });
    arr.push(button);
  });

  aBox.replaceChildren(...arr);
}

function goNext(qIdx) {
  let q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;

  addAnswer(qnaList[qIdx].a, qIdx);
}

function begin() {
  mainPage.style.WebkitAnimation = "fadeOut 0.5s";
  mainPage.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    mainPage.style.display = "none";
    qnaPage.style.WebkitAnimation = "fadeIn 0.5s";
    qnaPage.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qnaPage.style.display = "block";
      goNext(0);
    }, 450);
  }, 450);
}
