fixture("Frist Fixture")
    .page("");

test.skip.page("Frist test", async t => {
     
    await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button");

});
test("Frist test", async t => {
     
    await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button");

});