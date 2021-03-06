import {DIAGNOSTIC_CATEGORIES} from "@internal/diagnostics";
import {createRelativePath} from "@internal/path";
import {test} from "rome";
import {testLint} from "../../utils/testing";

test(
	"ts prefer interfaces",
	async (t) => {
		await testLint(
			t,
			{
				path: createRelativePath("file.ts"),
				category: DIAGNOSTIC_CATEGORIES["lint/ts/useInterfaces"],
			},
		);
	},
);
