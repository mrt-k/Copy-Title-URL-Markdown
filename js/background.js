function saveToClipboard(title, url) {
        var textArea = document.createElement("textarea");
        textArea.style.cssText = "position:absolute;left:-100%";
        document.body.appendChild(textArea);
        var markdown_fmt = "[" + title + "](" + url + ")"
        textArea.value = markdown_fmt
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    }


function callback(){
   chrome.tabs.getSelected(null, function(tab) {
      saveToClipboard(tab.title, tab.url);
   })
}
chrome.browserAction.onClicked.addListener(callback)
callback()
