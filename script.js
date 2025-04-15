//your JS code here. If required.
  // document.getElementById("enterBtn").addEventListener("click", function() {
  //           let statusParagraph = document.getElementById("status");
  //           statusParagraph.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
  //       });

const statusPara = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", () => {
  statusPara.outerHTML = `<h1#status>Entered Metaverse</h1>`;
});