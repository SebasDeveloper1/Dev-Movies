const $ = (selector) => document.querySelector(selector);

//Gobal Nodes
const header = null || $('#header');

const mainContent = null || $('#mainContent');

const footer = null || $('#footer');

const gobalNodes = { header, footer, mainContent, };

export default gobalNodes;