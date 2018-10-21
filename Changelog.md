# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] - 2018-10-21
### Added
- Changelog is formatted based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- Added Readme file
### Fixed
- Fixed bug that prevented setting listening port.

## [0.3.0] - 2018-05-01
### Added
* Each collection keeps its own id counter.
### Changed
* Collection doesn't preload data. Server sets initial collection data when it creates the collection.

## [0.2.0] - 2018-04-18
### Added
* Allow to choose listening port:
  ```bash
  yarn start 8088
  ```
### Changed
* **Breaking change**: parse `id` param as number.
### Fixes
* Fix some bugs on put and delete

## [0.1.0] - 2018-04-12

Initial release.

[0.3.1]: https://github.com/felixhorro/server-rest/tree/0.3.1
[0.3.0]: https://github.com/felixhorro/server-rest/tree/0.3.0
[0.2.0]: https://github.com/felixhorro/server-rest/tree/0.2.0
[0.1.0]: https://github.com/felixhorro/server-rest/tree/0.1.0
