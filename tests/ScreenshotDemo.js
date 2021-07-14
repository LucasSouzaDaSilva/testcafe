fixture("Frist Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t // set the window size to it's max size
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
            
    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Frist test", async t => {
        await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button").takeScreenshot();

    });

    test
    .page("https://devexpress.github.io/testcafe/example/")
    ("Secondtest", async t => {
        await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button").takeScreenshot();

    });

