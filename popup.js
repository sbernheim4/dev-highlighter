// State variable
const toggleCommentsBtn = document.getElementById("toggleComments");

function toggleComments() {

    chrome.tabs.getSelected(null, function (tab) {

        chrome.tabs.executeScript(

            tab.id,
            { file: './helpers/toggleComments.js' },
            function (response) {
                console.log(response);
            }

        );

    });

}

document.addEventListener('DOMContentLoaded', function () {

    toggleCommentsBtn.addEventListener("click", toggleComments);

});
