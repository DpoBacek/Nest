var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
var tsInstance = new Typescript("4.9.4");
console.log(tsInstance.info("MyProject"));
