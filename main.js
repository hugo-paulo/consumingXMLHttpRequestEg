const ServerURL = "https://localhost:44306/characterdetails";

function getMyData() {

    var ajaxRequest;

    try {
        //Comman browsers
        ajaxRequest = new XMLHttpRequest();

    } catch (e) {
        //Older IE Browsers
        try {

            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");

        } catch (e) {

            try {

                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");

            } catch (e) {
                alert("Your Browser is not Supported");
                return false;
            }
        }
        
    }

    //This will recieve data from the server
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var outputDisplay = document.getElementById("output-display");
            //outputDisplay.innerHTML = ajaxRequest.responseText;
            //Because we have responseType defined we can use .response method (However we returning an generic object)
            outputDisplay.innerHTML = JSON.stringify(ajaxRequest.response); //? how to get the value not [Object object] ?
            var nameOutput = document.getElementById("name-output");
            nameOutput.innerHTML = ajaxRequest.response[0].witchers[1].name;
        }
    };

    //now need to process the json data

    ajaxRequest.open("GET", ServerURL, true);
    ajaxRequest.responseType = "json";
    ajaxRequest.send();
}