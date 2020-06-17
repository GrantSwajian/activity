    function getURL() {
        var link = window.location.href;
        document.getElementById("pageLink").innerHTML = link;
    }
    function copyURL() {
        var link = window.location.href;
        alert("The link " + link + " has been copied");
    }
