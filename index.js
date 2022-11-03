import removeNukta from "./src/removeNukta.js";
String.prototype.removeNukta = function () {
    return removeNukta(this);
};

export {};
