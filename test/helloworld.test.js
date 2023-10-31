import sayHello from "../utils/helloworld.mjs";
import assert from "assert";

it ("Tests Returned Name", () => {
    const hello = sayHello();
    assert.equal(hello, "Izak");
});
