
import {html, ssg} from "@e280/scute"

const domain = "e280.org"
const favicon = "/assets/e.png"

export default ssg.page(import.meta.url, async _orb => ({
	title: "e280",
	js: "main.bundle.min.js",
	css: "main.css",
	dark: true,
	favicon,

	head: html`
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet">
	`,

	socialCard: {
		themeColor: "#3cff9c",
		siteName: "e280.org",
		title: "e280",
		description: "buildercore syndicate",
		image: `https://${domain}${favicon}`,
		url: `https://${domain}/`,
	},

	body: html`
		<section class=plate>
			<h1>e280</h1>
			<div class=inner>
				<blockquote>
					<span>An old alchemist gave the following consolation to one of his disciples:</span>
					<span>"No matter how isolated you are and how lonely you feel, if you do your work truly and conscientiously, unknown friends will come and seek you."</span>
					<cite>— Carl Jung</cite>
				</blockquote>
				<footer>
					<a href="https://github.com/e280">https://github.com/e280</a>
				</footer>
			</div>
		</section>
	`,
}))

