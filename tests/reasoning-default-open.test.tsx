import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

/**
 * The "Expand agent's thinking" setting (appearance.expandThinking): chat.tsx
 * passes it as Reasoning's defaultOpen. SSR pins the initial state both ways;
 * the stay-open-after-streaming half is the auto-close effect's guard.
 */

import { Reasoning, ReasoningContent, ReasoningTrigger } from "../components/ai-elements/reasoning.tsx";

function render(defaultOpen: boolean | undefined) {
	return renderToStaticMarkup(
		createElement(
			Reasoning,
			{ defaultOpen },
			createElement(ReasoningTrigger),
			createElement(ReasoningContent, null, "the agent's private reasoning"),
		),
	);
}

describe("Reasoning defaultOpen (Expand agent's thinking)", () => {
	it("opens the row when the setting is on", () => {
		const html = render(true);
		assert.match(html, /data-state="open"/);
		assert.match(html, /the agent&#x27;s private reasoning/);
	});

	it("stays collapsed when the setting is off or absent", () => {
		for (const value of [false, undefined]) {
			const html = render(value);
			assert.match(html, /data-state="closed"/);
			assert.doesNotMatch(html, /private reasoning/);
		}
	});
});
