const mainPage = document.querySelector("#mainPage");
const qnaPage = document.querySelector("#qnaPage");

let qCount = 0;

function goNext() {
  let q = document.querySelector(".qBox");
  let aBox = document.querySelector(".answerBox");

  q.innerHTML = qnaList[qCount].q;

  const alist = qnaList[qCount].a;
  const arr = [];
  alist.forEach((item) => {
    const button = document.createElement("button");
    button.innerHTML = item.answer;
    button.addEventListener("click", () => {
      qCount++;
      goNext();
    });
    arr.push(button);
  });

  aBox.replaceChildren(...arr);
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
      goNext();
    }, 450);
  }, 450);
}
