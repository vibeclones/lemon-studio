# lemon-studio (Vibeclones mirror)

Hosted copies of the browser (WebAssembly) builds of [Lemon Studio](https://github.com/ItsAlphaNeon/Lemon-Studio), a pattern-based music studio in Rust by AlphaNeon, as packaged by daijro's web port ([Lemon-Studio-web](https://github.com/daijro/Lemon-Studio-web)). The newest version lives at [playground.daijro.dev/lemon-studio](https://playground.daijro.dev/lemon-studio/); this repo keeps older versions open-able so the timeline can be explored in a browser.

- Latest: `/lemon-studio/latest/`
- Specific version: `/lemon-studio/v<version>/`
- Version list: `/lemon-studio/versions.json`

Each version is the unmodified `lemon-studio-web.zip` of a web-port release, plus a small service worker ([coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker), MIT) that gives the page the cross-origin isolation it needs, which GitHub Pages can't do with headers. Upstream license: GPL-3.0-or-later.
