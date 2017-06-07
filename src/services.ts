import {Injectable} from '@angular/core';

export class Foo {
    public value: string = 'foo value';
}

export class Bar {
    public value: string = 'bar value';
}

export class Baz {
    constructor(public value: string) {
    }
}

@Injectable()
export class Lorem {
    constructor(public foo: Foo, 
                public bar: Bar,
                public baz: Baz) {
    }
}
