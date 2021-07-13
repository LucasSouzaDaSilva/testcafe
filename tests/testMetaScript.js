fixture.meta('version','1')("Frist Fixture")
    .page("http://devexpress.github.io/testcafe/");

    test.meta('env','production')
    .page("https://devexpress.github.io/testcafe/example/")
    ("Frist test", async t => {
        await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button");

    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Secondtest", async t => {
        await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button");

    });

