fixture("set page out timeout fixture")
 . page("http://devexpress.github.io/testcafe/");

 test("set page timeout test", async =>{
        await t 
        .setPageLoadTimeout(0)
        .navigateTo('http://devexpress.github.io/testcafe/');

 });