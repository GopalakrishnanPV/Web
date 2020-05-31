let imageArray = ["image0.jpg", "image2.jpg"];
index = 0;
function slide() {
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
    document.getElementById("bannerimage").src = "assets/" + imageArray[index];
}
setInterval(getTime, 1000);

function getTime() {
    let time = new Date().toString().split(' ')[4];
    document.getElementById("time").innerHTML = time;
}