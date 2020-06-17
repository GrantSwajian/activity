    function getURL() {
        alert("The link " + window.location.href + " has been copied");
        var link = window.location.href;
        document.getElementById("pageLink").innerHTML = link;
    }
