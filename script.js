function swapImage() {
    var item = document.getElementsByClassName("item-1");
    console.log(item[0])
    console.log((item[0].style.backgroundImage));
    if (item[0].style.backgroundImage === "url(images/1i.jpg)") {
        item[0].style.backgroundImage = "url(images/1s.jpg)";
    } else {
        item[0].style.backgroundImage === "url(images/1i.jpg)"
    }
}