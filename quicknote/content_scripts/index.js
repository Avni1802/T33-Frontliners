browser.tabs.executeScript(tab.id, {code:
    "document.body.appendChild(document.createElement('script')).src = 'https://example.com/script.js';"
});
var body = document.querySelector('body');

html2canvas(body).then((canvas)=>{
    
})

