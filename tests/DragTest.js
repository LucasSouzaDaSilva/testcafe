import { Selector } from "testcafe";
const triedCheckbox = Selector('label').withText("I have tried testcafe");
const slider = Selector('#slider');

fixture ('Drag Test')
.page('https://devexpress.github.io/testcafe/example/');

test('Drag TestCase', async t => {

    await t 
    .setTestSpeed(0.01)
    .click(triedCheckbox)
    .drag(slider,360,0,{offsetX:10, offsetY:10});

})
