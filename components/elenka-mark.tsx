/**
 * ElenkaMark — the app mark, inlined as JSX so it rides along with the
 * components (no network fetch, recolorable, crisp at any size). The same
 * geometry as build/icon-flat.svg without the squircle: a question mark in
 * currentColor (follows the theme) whose dot is the amber spark. 1024
 * viewBox cropped to the glyph; sizing/padding is the consumer's job.
 *
 * Sits in the sidebar band (also the traffic-light gutter's resident in the
 * merged desktop chrome).
 */
export function ElenkaMark({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="256 154 512 760" className={className} aria-hidden="true">
			<path
				d="M362,410 A150,150 0 1 1 590,538 Q512,580 512,650"
				style={{ fill: "none", stroke: "currentColor", strokeWidth: 92, strokeLinecap: "round", strokeLinejoin: "round" }}
			/>
			<path
				d="M512,720 Q537.76,786.24 604,812 Q537.76,837.76 512,904 Q486.24,837.76 420,812 Q486.24,786.24 512,720Z"
				style={{ fill: "rgb(245,165,36)" }}
			/>
		</svg>
	);
}
