## Goal

this app should visualize eslint errors as historical data.

Steps:


  * run linter `npx eslint --format ./node_modules/eslint-summary-chart-formatter .`
  * linter exports into JSON output.
  * this app imports the JSON and displays historical data


inspiration:
* https://github.com/davidjbradshaw/eslint-formatter-summary-chart


Deploy:

```sh
$ aws s3 sync ./dist/ s3://staffomatic-frontend-lint-to-the-future/ --acl public-read
```

https://vitejs.dev/guide/features.html


## Tooling

* https://vitejs.dev/guide/features.html
* https://tailwindcss.com/
* https://github.com/posva/vite-tailwind-starter/blob/master/tailwind.config.js