    function getURL() {
        var link = window.location.href;
        document.getElementById("pageLink").innerHTML = link;
    }
    function copyURL() {
        alert("The link " + window.location.href + " has been copied");
    }
