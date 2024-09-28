function varTest() {
    if (true) {
        (function () {
            var a = 10;
            console.log(`inside block a value is:${a}`);
        })();
    }
    console.log(`inside block a value is:${a}`); 
}
varTest();