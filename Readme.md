# eslint-dashboard-ui


This app visualizes eslint errors as historical data.


![Screenshot 2022-08-26 at 09 57 30](https://user-images.githubusercontent.com/13223/186852735-3da785cf-d649-46b3-87c3-2221fd87b4ae.png)

the eslint data can be generates with a formatter:

```sh
$ eslint --format dashboard-exporter app > eslintdata.json
```

copy the data to the dist foilder and run the app with:

```sh
$ npm run dev
```


Todo:
- [ ] we should be able to fetch from absolut url
- [ ] option to handle/merge historical data automatically
- [ ] add tests


Ideas:
- [ ] add other graphs/analytics like outdated dependencies
- [ ] define sorting in the UI
