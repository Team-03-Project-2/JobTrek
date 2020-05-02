// the plan is to compare the parent element id of the source object and destination object. 

// check classname of each object so we do not drop a card on another card.


function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  // add target element's id to the data transfer object
  event.dataTransfer.setData("text", event.target.id);
}

function dropIt(event) {
  event.preventDefault();
  //get element by id
  //sourceID ev.dataTransfer.getData("href")
  var source = document.getElementById(event.dataTransfer.getData("text"));
  var sourceParent = source.parentElement;

  let target = document.getElementById(event.target.id)
  let targetParent = target.parentElement;

  // var target = event.currentTarget.firstElementChild;

  // event.currentTarget.replaceChild(source, target);
  // sourceParent.appendChild(target);

  target.appendChild(source)
}