'use strict';

document.addEventListener('DOMContentLoaded', function () {
    new STabs({
        head: '.test-tab',
        content: '.test-content__item',
        on: {
            beforeChangeTab() {
                console.log(this);
            },
            afterChangeTab() {
                console.log(this);
            },
        }
    });
});