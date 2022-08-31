
let content = document.getElementById("content");

let videoId = JSON.parse(localStorage.getItem("videoId"));

let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${videoId}`
iframe.width = "100%";
iframe.height = "100%";
iframe.allowFullscreen = true;
content.append(iframe);