ember-qunit-decorators
==============================================================================

[![Build Status](https://travis-ci.org/mike-north/ember-qunit-decorators.svg?branch=master)](https://travis-ci.org/mike-north/ember-qunit-decorators)
[![Version](https://img.shields.io/npm/v/ember-qunit-decorators.svg)](https://www.npmjs.com/package/ember-qunit-decorators)

Use ES6 or TypeScript decorators for QUnit tests in your Ember app

Installation
------------------------------------------------------------------------------

```
ember install ember-qunit-decorators
```


Usage
------------------------------------------------------------------------------

When present in an Ember.js project, this addon automatically provides support for [qunit-decorators](https://github.com/mike-north/qunit-decorators). Details about the usage of the `@suite` and `@test` decorators can be found in the [qunit-decorators README](https://github.com/mike-north/qunit-decorators/blob/master/README.md)

This addon provides three base classes that make working with [ember-qunit](https://github.com/emberjs/ember-qunit) and [@ember/test-helpers](https://github.com/emberjs/ember-test-helpers) easy.

Blueprints
------------------------------------------------------------------------------

**Test generators for all standard ember.js objects are included**, so you should get tests like the examples below automatically, as a result of generating `Component`s, `Route`s, `Service`s and more!

You may optionally generate tests explicitly by using the generators directly

```sh
ember g component-test
```

By default, if you have [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) installed in your project, the tests will be generated in TypeScript, otherwise they'll be in JavaScript. You may explcitly specify which language the tests should be in with `--inJs` or `--inTs` flags

```sh
ember g acceptance-test --inTs
```


Example Tests
------------------------------------------------------------------------------

### Unit Test

```ts
import { suite, test } from 'qunit-decorators';
import { EmberTest } from 'ember-qunit-decorators/test-support';

@suite('Unit | Route | index')
export class IndexRouteTest extends EmberTest {

  @test 'it exists'(assert: Assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  }
}
```
### Integration Test

```ts
import { suite, test } from "qunit-decorators";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { EmberRenderingTest } from "ember-qunit-decorators/test-support";

@suite("Integration | Helper | capitalize")
export class CapitalizeHelperTest extends EmberRenderingTest {

  @test async 'it renders'(assert: Assert) {
    this.set("inputValue", "hello");

    await render(hbs`{{capitalize inputValue}}`);

    assert.equal(('' + this.element.textContent).trim(), "Hello");
  }
}
```

### Acceptance Test

```ts
import { suite, test } from 'qunit-decorators';
import { visit, currentURL } from '@ember/test-helpers';
import { EmberApplicationTest } from 'ember-qunit-decorators/test-support';

@suite('Acceptance | index')
export class IndexAcceptanceTest extends EmberApplicationTest {

  @test async 'visiting / '(assert: Assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  }
}

```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-qunit-decorators`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
