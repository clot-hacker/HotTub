var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let HotTub_00;
        (function (HotTub_00) {
            function FormatRecipeList(inputArray) {
                var outputArray = new Array();
                for (let i = 0; i < inputArray.length; i++) {
                    if (inputArray[i] != '') {
                        outputArray.push(inputArray[i]);
                    }
                }
                return outputArray;
            }
            HotTub_00.FormatRecipeList = FormatRecipeList;
        })(HotTub_00 = Functions.HotTub_00 || (Functions.HotTub_00 = {}));
        Functions.registerFunctionEx('FormatRecipeList', 'TcHmi.Functions.HotTub_00', HotTub_00.FormatRecipeList);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=FormatRecipeList.js.map