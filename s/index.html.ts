
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, unsanitized, renderSocialCard} from "@benev/turtle"

const domain = "e280.org"
const favicon = "/assets/e.png"

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()

	return easypage({
		path,
		dark: true,
		title: "e280",
		head: html`
			<link rel="icon" href="${favicon}"/>
			<style>${unsanitized(await read_file("x/style.css"))}</style>
			<meta data-commit-hash="${hash}"/>

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet">

			${renderSocialCard({
				themeColor: "#3cff9c",
				siteName: "e280.org",
				title: "e280",
				description: "buildercore syndicate",
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
			})}

			${headScripts({
				devModulePath: await path.version.root("main.bundle.js"),
				prodModulePath: await path.version.root("main.bundle.min.js"),
				importmapContent: await read_file("x/importmap.json"),
			})}
		`,
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
	})
})

