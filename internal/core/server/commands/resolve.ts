/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ServerRequest} from "@internal/core";
import {commandCategories} from "../../common/commands";
import {createServerCommand} from "../commands";
import {markup} from "@internal/markup";

export default createServerCommand({
	category: commandCategories.SOURCE_CODE,
	description: markup`resolve a file`,
	usage: "",
	examples: [],
	hidden: true,
	defineFlags() {
		return {};
	},
	async callback(req: ServerRequest): Promise<string> {
		const {server, reporter} = req;
		const {args} = req.query;
		const {flags} = req.client;
		req.expectArgumentLength(1, 2);

		let origin;
		let relative;

		if (args.length === 2) {
			origin = flags.cwd.resolve(req.args.getIndex(0).asFilePath());
			relative = req.args.getIndex(1);
		} else {
			origin = flags.cwd;
			relative = req.args.getIndex(0);
		}

		const resolved = await server.resolver.resolveEntryAssert({
			...req.getResolverOptionsFromFlags(),
			origin,
			source: relative.asFilePath(),
			location: relative.getDiagnosticLocation(),
		});
		reporter.log(resolved.ref.real);
		return resolved.ref.real.join();
	},
});
