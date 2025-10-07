# Cypress Best Practices
## Don't use cy.wait(X ms)

Cypress is providing us with a cy.wait(x) method, that will effectively, wait x ms before going on the next assessment. However it is often misused as a replacement to waiting for an HTTP Request to complete or an element to render. Cypress documentation evens mention it as an anti-pattern. 

Instead you should use cy.wait() with an aliases defined by intercepting a web request.

Let's say you a simple todo app hitting the api with a GET Request on `notes`. 
Instead of waiting an arbitrary amount of time that you will define with `cy.wait(1000)`, prefer first declare the request interception with 

```js
cy.intercept('GET', '/notes').as('waitNotes');
```

Note that there the interception is saved with the alias `waitNotes`
You can then easily wait for the API response to complete with the following :

```js
cy.wait('@waitNotes');
```

However I often prefer to make sure the API call has been successful with 

```js
cy.wait('@waitNotes').its('response.status.code').should('eq', 200);
```

### Don't underestimate the minimal configuration

I once had the problem of a Cypress Testing application who was running perfectly fine on developers laptops, even multiples runs, with warm or cold start. But once on the CI pipeline it was giving very inconsistent results, or so called flakiness, with different test failing at different places for unknown reasons and impossible to reproduced. 

After looking carefully at the recorded videos of failing test runs  I could not unnoticed how the web application was very laggy, way more than when I was accessing it from my laptop.

After some reads on the cypress documentation, I noticed the CI Server running cypress had been under-configured, using the default configuration, which was not enough to run Cypress correctly with video recording enabled .
