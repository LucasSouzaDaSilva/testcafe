fixture("Houver Fixfiture")
.page('https://devexpress.github.io/testcafe/example/')

test('Houver test', async t => {
    await t 
        .setTestSpeed(0.1)
        .houver('input#populate');

});