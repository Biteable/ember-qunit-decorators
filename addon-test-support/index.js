import { setupRenderingTest, setupApplicationTest } from "ember-qunit";
import { setupTest } from 'ember-qunit';
class BaseEmberTest {
}
export class EmberRenderingTest extends BaseEmberTest {
    constructor(hooks, options = { skipSetup: false }) {
        super();
        if (!options.skipSetup) {
            setupRenderingTest(hooks);
        }
    }
}
export class EmberApplicationTest extends BaseEmberTest {
    constructor(hooks, options = { skipSetup: false }) {
        super();
        if (!options.skipSetup) {
            setupApplicationTest(hooks);
        }
    }
}
export class EmberTest extends BaseEmberTest {
    constructor(hooks, options = { skipSetup: false }) {
        super();
        if (!options.skipSetup) {
            setupTest(hooks);
        }
    }
}
