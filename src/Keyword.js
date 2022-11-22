export default function Keyword({
  $target,
  initialState,
  onKeywordInput,
  onEnter,
}) {
  const $keyword = document.createElement("input");
  $keyword.className = "Keyword";

  $target.appendChild($keyword);

  this.state = initialState;

  this.setState = (nextStae) => {
    this.state = nextStae;
    $keyword.value = this.state.value;
  };

  $keyword.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      onEnter();
    } else {
      onKeywordInput(e.target.value);
    }
  });
}
