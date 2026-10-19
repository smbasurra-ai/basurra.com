# Selotuin Website

A responsive, dependency-free website for Selotuin, an import and export company based in Belgium.

## Run locally

Open `index.html` in a browser. The site uses plain HTML, CSS and JavaScript, so no build tools or package installation are needed.

## Publish with GitHub Pages and Namecheap

1. Create a GitHub repository for the website. Upload `index.html`, `styles.css`, `script.js`, `CNAME`, and `README.md` to the repository root using **Add file > Upload files**.
2. In the repository, open **Settings > Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
3. In **Settings > Pages**, enter `basurra.com` under **Custom domain** and save. The `CNAME` file in this project already contains that domain.
4. In Namecheap, open **Domain List > Manage** for `basurra.com`, then **Advanced DNS > Host Records**. Add these four records:

	| Type | Host | Value |
	| --- | --- | --- |
	| A Record | `@` | `185.199.108.153` |
	| A Record | `@` | `185.199.109.153` |
	| A Record | `@` | `185.199.110.153` |
	| A Record | `@` | `185.199.111.153` |
	| CNAME Record | `www` | `YOUR-GITHUB-USERNAME.github.io` |

	Replace `YOUR-GITHUB-USERNAME` with your GitHub username. Remove conflicting parking or web-forwarding records for `@` and `www`, but keep MX/TXT records used by your email. Do not change nameservers if Namecheap is already managing your DNS.
5. Wait for DNS to update (it can take up to 24 hours). Return to **Settings > Pages** and enable **Enforce HTTPS** when the option becomes available.

GitHub Pages publishes the site at `https://basurra.com`; the `www.basurra.com` address will redirect when both DNS records are set. GitHub recommends verifying domain ownership in your account’s Pages settings before adding DNS records.

## Before publishing

- Confirm the company name, service descriptions and preferred language.
- Review the supplied contact details and add any required legal/company information.
- The inquiry form opens WhatsApp with a prefilled message to the supplied number; visitors must tap Send in WhatsApp.

The visual map is an original CSS illustration, not a geographic map or a representation of specific shipping routes.
