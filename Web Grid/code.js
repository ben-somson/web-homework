document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  document.getElementById("btn-add-line").addEventListener('click', add_a_row)
  //ajouter une callback au bouton
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
  for (let div of document.querySelectorAll('#grid>div'))
    div.addEventListener('click', ()=> set_color
    (div))


  document.getElementById('grid').addEventListener('mouseover', (event) => {console.log(event) 
    if (event.target.id == 'grid') {return} 
    event.target.classList.add('hover')})
}

function add_a_row() {
  console.log('click')
  let father = document.getElementById("grid")
  for(let i=0; i<10; i++){
    let div = document.createElement('div')
    div.addEventListener('click', ()=> set_color
    (div))
    father.append(div)
  }
}

function set_color(elt) {
  elt.style.backgroundColor = randomRGB()

}

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  console.log(RGBColor)
  return RGBColor
}