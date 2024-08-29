function openTab(evt, tabName) {
    var i, tabContent, tabLink;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function() {
    document.getElementsByClassName('tab-link')[0].click();
};

document.getElementById("toggle-button").addEventListener("click", function() {
    var profilePicture = document.getElementById("profile-picture");
    if (profilePicture.style.display === "none") {
        profilePicture.style.display = "block";
    } else {
        profilePicture.style.display = "none";
    }
});
