import {test} from "rome";
import {TokenizerCore} from "@internal/parser-core/index";

const input = "Lorem ipsum, 10 numbers and 46 animals.";

test(
	"TokenizerCore",
	(t) => {
		const tokenizer = new TokenizerCore({input});

		t.is(tokenizer.getRange(5), "Lorem");
		t.is(tokenizer.get(5), " ");

		t.is(tokenizer.eat("Lorem"), "Lorem");
		t.is(tokenizer.get(), " ");

		t.is(tokenizer.startsWith(" ipsum"), true);
		t.notThrows(() => tokenizer.assert(" ipsum"));
	},
);
