fixture('navegate example')
.page('https://devexpress.github.io/testcafe/example/')

test('navegate test', async =>{
     
    await t 
    .navegateTo("http://www.google.com");

}) 