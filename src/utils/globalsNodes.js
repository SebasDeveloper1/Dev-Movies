const $ = (selector) => document.querySelector(selector);

// Gobal Nodes
const bodyContainer = null || $('#bodyContainer');

const header = null || $('#header');

const mainContent = null || $('#mainContent');

const footer = null || $('#footer');

const modal = null || $('#modal');

const globalNodes = { bodyContainer, header, mainContent, footer, modal };

export default globalNodes;
