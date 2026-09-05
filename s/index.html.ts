
import {template, html, socialCard} from "@e280/scute"

const domain = "e280.org"
const favicon = "/assets/e.png"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000}}</style>

			<title>e280</title>
			<link rel="icon" href="${orb.hashurl(favicon)}"/>
			<link rel="stylesheet" href="${orb.hashurl("main.css")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet"/>

			${socialCard({
				themeColor: "#3cff9c",
				siteName: "e280.org",
				title: "e280",
				description: "buildercore syndicate",
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
			})}
		</head>
		<body>
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
		</body>
	</html>
`)

