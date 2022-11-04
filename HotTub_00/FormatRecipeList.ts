module TcHmi {
	export module Functions {
		export module HotTub_00 {
			export function FormatRecipeList(inputArray: any) {
				var outputArray = new Array();
				for (let i = 0; i < inputArray.length; i++){
					if (inputArray[i] != ''){
						outputArray.push(inputArray[i]);
					}
				}
				return outputArray;
			}
		}
		registerFunctionEx('FormatRecipeList', 'TcHmi.Functions.HotTub_00', HotTub_00.FormatRecipeList);
	}
}