fixture("Frist Fixture")
    .page("http://devxpress.github.io/testcafe/example/");

    const nameInput = Selector('#developer-name');

test("Set Test Speed Test", async t => {
     
    await t 
    .setTestSpeed(0.1)
    .typeText(nameInput,'Peter')
    .typeText(nameInput,'Parker');
    

});