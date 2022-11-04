var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let HotTub_00;
        (function (HotTub_00) {
            function TestFunction(x) {
                return x;
            }
            HotTub_00.TestFunction = TestFunction;
        })(HotTub_00 = Functions.HotTub_00 || (Functions.HotTub_00 = {}));
        Functions.registerFunctionEx('TestFunction', 'TcHmi.Functions.HotTub_00', HotTub_00.TestFunction);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=TestFunction.js.map