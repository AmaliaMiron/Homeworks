window.addEventListener("load", function () {
  var addCommentElement = document.querySelector("#addComm");
  var addButtonElement = document.querySelector("#buttonbox");
  var commentContainer = document.querySelector(".container");

  addButtonElement.addEventListener("click", function () {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
  });
});

function deleteCommentElement(event) {
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
}

function createCommentElement(textareaValue) {
  var div = document.createElement("div");
  div.classList.add("comments");
  div.innerHTML =
    "" +
    textareaValue +
    " <button onclick=deleteCommentElement(event)>Delete</button>";
  return div;
}
