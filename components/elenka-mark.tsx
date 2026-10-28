/**
 * ElenkaMark — the app mark, inlined as JSX so it rides along with the
 * components (no network fetch, recolorable, crisp at any size). The same
 * geometry as build/icon-flat.svg without the squircle: a geometric "e" in
 * currentColor (follows the theme) and the amber accent dot. 1024 viewBox
 * cropped to the glyph; sizing/padding is the consumer's job.
 *
 * Sits in the sidebar band (also the traffic-light gutter's resident in the
 * merged desktop chrome).
 */
export function ElenkaMark({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="200 180 680 540" className={className} aria-hidden="true">
			<path
				d="M252,512 L772,512 A260,260 0 1 0 711,679"
				style={{ fill: "none", stroke: "currentColor", strokeWidth: 76, strokeLinecap: "round", strokeLinejoin: "round" }}
			/>
			<circle cx="800" cy="250" r="50" style={{ fill: "rgb(245,158,11)" }} />
		</svg>
	);
}
