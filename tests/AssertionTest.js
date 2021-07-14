import {Selector} from 'testcafe';
    const developerName = Selector("#developer-name");
    const osOption = Selector("#macos");
    const submitButton = Selector("#submit-button");

fixture("Frist Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Frist test", async t => {
     const developernameElement = await developerName.with({visibilityCheck:true})();
    await t 
    .expect(developerName. value).eql('','input is empty')
    .takeElementScreenshot(developerName)
    .typeText(developerName,"TAU")
    .expect(developerName.value).eql('TAU','Input contain')
    .click(osOption)
    .click(submitButton);

});