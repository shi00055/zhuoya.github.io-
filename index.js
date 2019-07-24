const gallery = [];

for(let i = 1; i < 13; i++){
    gallery.push(  `<div id="pic${i}" class="pic"><img src="image/${i}.jpg"></div>`);
   
}

Allgallery = gallery.join(" ");
document.getElementById("gallery").innerHTML += Allgallery;

const overlay = document.querySelector(".overlay")
const theimage = document.querySelector(".theimage")
for(let i = 1; i < 13; i++){
    document.getElementById("pic"+i).addEventListener('click', function(e){
        overlay.classList.add("show")
        theimage.src = `image/${i}big.jpg`
//        ("<img src =\"image/" + i + ".jpg\">");
    })
}

theimage.addEventListener('click', function(e){
    overlay.classList.remove("show")
})