var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.hello = function (name) {
        if (name === void 0) { name = 'World'; }
        return "Hello, " + name + "!";
    };
    return HelloWorld;
}());
//export default HelloWorld 
console.log(HelloWorld.hello("Patata"));
