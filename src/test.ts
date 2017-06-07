import 'reflect-metadata/Reflect';
import { Foo, Bar, Baz, Lorem } from './services';
import { ReflectiveInjector } from '@angular/core';

const providers = [
    Foo,
    Bar,
    {
        provide: Baz,
        useFactory: () => new Baz('baz value by factory')
    },
    Lorem,
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const lorem = injector.get(Lorem);

console.log({ lorem });

/**
   Output:

    { lorem:
    Lorem {
        foo: Foo { value: 'foo value' },
        bar: Bar { value: 'bar value' },
        baz: Baz { value: 'baz value by factory' } } }
 */