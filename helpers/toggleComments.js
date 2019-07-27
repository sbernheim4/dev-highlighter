var nodeListOfCommentToggles = document.querySelectorAll('.js-toggle-file-notes');
var checkmarkList = Array.from(nodeListOfCommentToggles);
checkmarkList.forEach(val => val.click());
