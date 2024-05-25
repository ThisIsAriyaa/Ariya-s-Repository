function createHelloWorld() {
    return function () {
        return "Hello World";
    };
}

const args = [{},null,this.nutz ];
const f = createHelloWorld(args);
console.log(f());