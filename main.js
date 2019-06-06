var requestURL = 'data.json';

var req = new XMLHttpRequest;

req.open('GET', requestURL);

req.responseType = 'json';
req.send();

let gallery;
let zonGal = document.getElementById("zoneGal")
let zonImg = document.getElementById("zoneImg")

req.onreadystatechange = () => {
    if(req.readyState === XMLHttpRequest.DONE){
        if(req.status == 200){
            gallery = req.response;
            console.table(gallery);
            
            generateGal(gallery);
        } else {
            console.error(`Erreur ${req.status} lors de la requete AJAX`)
            let errorText = document.createElement("h2")
            errorText.innerHTML = `Erreur ${req.status} lors de la requete AJAX`
            errorText.style.color = `red`
            zonGal.appendChild(errorText)
        }
    }
}

function generateGal(jsonObj){
    for (let i = 0; i < jsonObj.length; i++) {
        zonGal.innerHTML +=  `
            <a href="#" class="imgElem" id="${i}">
                <img src="${jsonObj[i].thumb}" alt="${jsonObj[i].desc}">
            </a>
        `
    }

    for (let i = 0; i < jsonObj.length; i++) {
        document.getElementsByClassName("imgElem")[i].addEventListener("click", showImg)
    }
}

function showImg(event) {
    let i = this.id
    zonImg.innerHTML = `
        <h2>${gallery[i].desc}</h2><br>
        <img src="${gallery[i].img}" alt="${gallery[i].desc}">
    `
}