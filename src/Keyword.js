export default function Keyword({ $target, initialState, onKeywordInput }) {
  const $keyword = document.createElement("input");
  $keyword.className = "Keyword";

  $target.appendChild($keyword);

  this.state = initialState;

  this.setState = (nextStae) => {
    this.state = nextStae;
    $keyword.value = this.state.value;
  };

  $keyword.addEventListener("keyup", (e) => {
    onKeywordInput(e.target.value);
  });
}
