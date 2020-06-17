    function copyURL() {
        var dummy = document.createElement('input'),
        link = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = link;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert("The link " + window.location.href + " has been copied");
    }
