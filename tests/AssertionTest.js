import {Selector} from 'testcafe';
    const developerName = Selector("#developer-name");
    const osOption = Selector("#macos");
    const submitButton = Selector("#submit-button");

fixture("Frist Fixture")
    .page("");

test("Frist test", async t => {
     
    await t 
    .expect(developerName. value).eql('','input is empty')
    
    .typeText(developerName,"TAU")
    .expect(developerName.value).eql('TAU','Input contain')
    .click(osOption)
    .click(submitButton);

});