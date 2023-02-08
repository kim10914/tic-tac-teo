function openPlayerConfig() {
  editedPlayer = +event.target.dataset.playerid; // 뭔뜻인지 문장을 모르겠어요...> dataset으로 playerid에 접근한다는 뜻 +"1" > 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function colsePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = ""; // 씨부럴 이거 왜 추가한건지 모르겠음
  formElement.firstElementChild.lastElementChild.value = ""; // 끝에 value를 사용하면 문자열을 공백으로 지정하는 것
}
//괄호에 event는 왜붙히는...
function savePlayerConfig(event) {
  event.preventDefault(); //preventDefault ??? > 창의 다시실행을 막아준다.
  const formData = new FormData(event.target); //???
  const enteredPlayername = formData.get("playername").trim(); //trim은 공백을 다 자르는 거라네요 get name을 가져온다 formData에서

  // enteredPlayername === ""
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error"); //event.target이 정확이뭔지 모르는듯
    errorsOutputElement.textContent = "Please enter a valid name!";
    return; //return 정확히 뭐하는 새끼인지...
  }

  const upadatdPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  upadatdPlayerDataElement.children[1].textContent = enteredPlayername; //playername을 변경한다.(h3)

  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[0].name = enteredPlayername;
  // } 이걸 더 많이 사용할 것 같은 느낌

  players[editedPlayer - 1].name = enteredPlayername; //player엑세스 위 문자을 간단하게 표현 한것

  colsePlayerConfig(); // 값이 올바르면 article을 닫는다.
}
