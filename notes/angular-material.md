## Notes on Angular & Angular Material UI

Notes on diverse Angular/Material tips & tricks, optimization



### Material Tab Optimization
-----

#### Lazy Loading 

By default, the content inside Material Tab is eargerly loaded, meaning everything is being rendered, which gives a better experience when browsing but can impact the server performance

[Angular Material Tabs - Lazy Loading](https://material.angular.dev/components/tabs/overview#lazy-loading)


#### Keeping DOM content

By default the content inside the tab is being removed, which is ideal in most case, but for others where the loading or rendering takes time, it can be benefitial to keep the content.

[Angular Material Tabs - Preserving Content](https://material.angular.dev/components/tabs/overview#lazy-loading)
