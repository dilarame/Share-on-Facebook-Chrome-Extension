function MyGenericClick(info, tab) {
  console.log("Clicked on page: ", info, tab);
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.pageUrl +"&display=popup",
    "type": "popup"
  })
}

function MyImageClick(info, tab) {
  console.log("Clicked on image: ", info, tab);
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.srcUrl +"&display=popup",
    "type": "popup"
  })
}

function MyQuoteClick(info, tab) {
  chrome.windows.create({
    "url": "https://facebook.com/sharer.php?u=" + info.pageUrl +"&display=popup&quote=" + info.selectionText,
    "type": "popup"
  })
}

chrome.contextMenus.create({
  "title": "Share page on Facebook",
  "contexts": ["page"],
  "onclick": MyGenericClick
})

chrome.contextMenus.create({
  "title": "Share Image on Facebook",
  "contexts": ["image"],
  "onclick": MyImageClick
})

chrome.contextMenus.create({
  "title": "Share Quote on Facebook",
  "contexts": ["selection"],
  "onclick": MyQuoteClick
})
