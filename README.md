# Moving the Angular tutorial to Typescript
See [Angular Tutorial](https://docs.angularjs.org/tutorial) for the original

## Notes
* This could probably be done better, especially copying the bower components across.
* Tests should be re-written to instantiate the classes directly
* I've kept the DI side in the Angular methods rather than using $inject in the class itself for testability reasons, not sure if this is standard practice or not, but makes sense to me
* There's a lot of extra type safety that's probably not required that maps directly into the HTML files, but done for completeness
* Added gulp for compiling the Typescript. Could possibly be better to use webpack and dependencies (in the package.json file) to remove the Bower requirement