"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstChild; n != null; n = n.nextSibling) {
if (n.nodeName.value = "H2") {
	const anchor = document.createElement("a");
	anchor.setAttribute("name", "doclink" + "headingCount");
	n.insertBefore(anchor, h2.firstChild);
	}
}
