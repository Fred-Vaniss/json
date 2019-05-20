console.log("working")
var requestURL = 'https://raw.githubusercontent.com/Fred-Vaniss/json/master/data.json';

var request = new XMLHttpRequest;

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var gallery = request.response;
    populateHeader(gallery);
    // showHeroes(gallery);

}

// function generateGal(jsonObj){
//     for (let i = 0; i < jsonObj.length; i++) {
//         zonGal.innerHTML +=  `
//             <a href="#" class="imgElem" id="${i}">
//                 <img src="${jsonObj[i].thumb}" alt="${jsonObj[i].desc}">
//             </a>
//         `
//     }

//     for (let i = 0; i < jsonObj.length; i++) {
//         document.getElementsByClassName("imgElem")[i].addEventListener("click", showImg)
//     }
// }