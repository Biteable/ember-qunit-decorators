/// <reference types="qunit" />
/// <reference types="ember" />
import ApplicationInstance from "@ember/application/instance";
declare abstract class BaseEmberTest {
    protected owner: ApplicationInstance;
    protected set: (key: string, value: any) => void;
    protected get: (key: string) => any;
    protected setProperties: (toSet: {
        [key: string]: any;
    }) => void;
    protected getProperties: (...args: any[]) => any[];
}
export declare abstract class EmberRenderingTest<E extends HTMLElement = HTMLElement> extends BaseEmberTest {
    protected element: E;
    constructor(hooks: NestedHooks, options?: {
        skipSetup: boolean;
    });
}
export declare abstract class EmberApplicationTest extends BaseEmberTest {
    constructor(hooks: NestedHooks, options?: {
        skipSetup: boolean;
    });
}
export declare abstract class EmberTest extends BaseEmberTest {
    constructor(hooks: NestedHooks, options?: {
        skipSetup: boolean;
    });
}
export {};
