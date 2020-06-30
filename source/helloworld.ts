class HelloWorld {
    static hello(name: string = 'World') {
        return "Hello, " + name + "!"
    }
}
//export default HelloWorld 
console.log(HelloWorld.hello("Patata"));
