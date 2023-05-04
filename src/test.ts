import { Component, Logger, Method, Param, Prop } from "./test-dependencies";

@Logger()
@Component(15)
export class User {
    @Prop id: number;

    @Method
    changeId(@Param newId: number) {
        this.id = newId;
        return this.id;
    }
}

console.log(new User().id);
console.log(new User().changeId(19));