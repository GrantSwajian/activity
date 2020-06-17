    function getURL() {
        var link = window.location.href;
        document.getElementById("pageLink").innerHTML = link;
    }
    function copyURL() {
      alert("The link " + link + " has been copied");
    }
