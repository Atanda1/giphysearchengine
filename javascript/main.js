const mainbutton = document.getElementById("mainbutton");
const maininput = document.getElementById("maininput");
const container = document.getElementById("container");

const url = "http://api.giphy.com/v1/gifs/search?";
const key = "AN8CESQWzBzEqesIbm4o7qGH14yRNQuc";

function queryThisShit() {
  const query = url + "q=" + encodeURI(maininput.value) + "&api_key=" + key;
  console.log(query);
  return query;
};


mainbutton.addEventListener("click", function(e) {
    fetch(queryThisShit())
    .then (function(response) {
      return response.json();
     
    })
    
    .then (function (response) {
      return renderImages(response.data);
    })

    e.preventDefault;
});

function renderImages (data1) {
  const oldNames = document.querySelectorAll(".search_result");
  if (oldNames.length > 0) {
    oldNames.forEach(function(image) {
      image.remove();
    });
  }

  data1.forEach(function(value, key){
    // create anchor tag and append to div
    var anchor = getElement("a", {href: value.url, class: "result__link", target: "_blank"});
    setElement(anchor, ".container");
    //create an image tag and append the image to the anchor tag
    var image = getElement("img", {src: value.images.fixed_width.url,alt: value.title, class: "search_result"});
    setElement(image, '.result__link'); });

}


function getElement(type, attributes) {
    var element = document.createElement(type);
    for (attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    return element;
}
//append image to target element
function setElement (element, target) {
    document.querySelector(target).appendChild(element);
}



