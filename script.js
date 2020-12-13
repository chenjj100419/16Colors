console.log("Script Loader OK!");
console.log("       ////////////");
console.log("      ////");
console.log("     ////");
console.log("    ////");
console.log("   ////");
console.log("  ////");
console.log(" ////");
console.log("////////////");
function copy(text) {
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    doneCopy(text);
}
function doneCopy(text) {
    window.alert("内容复制成功 - " + text + "\n感谢使用C系作品");
}
function red() {
    copy("#FF0000");
}
function orange() {
    copy("#FF7D00");
}
function yellow() {
    copy("#FFFF00");
}
function green() {
    copy("#00FF00");
}
function young() {
    copy("#00FFFF");
}
function blue() {
    copy("#0000FF");
}
function purple() {
    copy("#FF00FF");
}
function black() {
    copy("#000000");
}
function white() {
    copy("#FFFFFF");
}
function navy() {
    copy("#000080");
}
function darkSlateGray() {
    copy("#2F4F4F");
}
function indigo() {
    copy("#4B0082");
}
function steelBlue() {
    copy("#4682B4");
}
function cadetBlue() {
    copy("#5F9EA0");
}
function teal() {
    copy("#008080");
}
function auqamarin() {
    copy("#7FFFAA");
}
function mediumAquamarine() {
    copy("#00FA9A");
}
function gold() {
    copy("#FFD700");
}
function tan() {
    copy("#D2B48C");
}
function silver() {
    copy("#C0C0C0");
}
function this_is_egg_233() {
    console.log("哈哈哈哈哈哈");
}