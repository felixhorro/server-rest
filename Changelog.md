# Changelog

## v0.3.0
### Improvements
* Collection doesn't preload data. Server sets initial collection data when it creates the collection.
* Each collection keeps its own id counter.

## v0.2.0
### Improvements
* Allow to choose listening port:
  ```bash
  yarn start 8088
  ```
* **Breaking change**: parse `id` param as number.


### Fixes
* Fix some bugs on put and delete

## v0.1.0

Initial release.

