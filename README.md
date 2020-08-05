## Demo & Example

### Cloud-based demo

Visit https://sorry-cypress-demo.herokuapp.com/ and see the alpha version of the web dashboard in action.

> This demo is a free heroku instance, it takes a minute to spin it up when you first navigate.

You can [reconfigure Cypress](#Reconfiguring-Cypress) to use `api_url: "https://sorry-cypress-demo-director.herokuapp.com/"`, run your tests and see the results appear in the dashboard.

Also consider the [example](https://github.com/agoldis/sorry-cypress/tree/master/example) with detailed example of parallelization.

### Run the demo locally

1. Run `docker-compose -f docker-compose.full.yml up`
2. Open the browser at [http://localhost:8080/](http://localhost:8080/) to see the dashboard

This will start all 3 services on your local machine,

[Reconfigure Cypress](#Reconfiguring-Cypress) to use `api_url: "http://localhost:1234/"`,

Run your tests `cypress run --parallel --record --key xxx --ci-build-id <buildId>` and you will see the results appear in the dashboard. Those cypress tests will run in parallel without connecting to the official dashboard.

> You will need to [setup S3](https://github.com/agoldis/sorry-cypress/wiki/S3-screenshot-bucket-setup-instructions) to be able to upload failed test screenshots. Replace the credentials in `docker-compose.full.yml` after you've set up S3 bucket.
