module TcHmi {
	export module Functions {
		export module HotTub_00 {
			export function TestFunction(x: any) {
                return x;
            }
		}
		registerFunctionEx('TestFunction', 'TcHmi.Functions.HotTub_00', HotTub_00.TestFunction);
	}
}