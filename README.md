# cursor-multi-line vs-code extension

> Inspiration comes from [cursor-jump](https://github.com/leonardpauli/vscode-cursor-jump) and [Scroll Faster](https://github.com/Enkel-Digital/scroll-faster)


Jump or select eg. 8 lines up/down with option+up/down(shift+option+up/down) (fast navigation, customizable)
## Features

- exposes `cursor-multi-line` which takes arg `{deltaLine: number, deltaChar: number, moveAnchor: bool, moveActive: bool}` (moveAnchor/Active is true by default, ie. will move the whole selection)
- set custom key-bindings, eg.:

  ```json
  {
    "command": "cursor-multi-line",
    "when": "editorTextFocus",
    "key": "alt+up",
    "args": {"lineDelta": -8, "charDelta": 0}
  }
  ```

- works on multiple selections
- ability to only move end point / "active" by setting `moveAnchor: false`, useful when doing eg. `shift-alt-up`

## Requirements

None. Appart from [vscode-extension-starter-guide](https://code.visualstudio.com/api/get-started/your-first-extension), this extension is like 10 lines of code.

## Extension Settings

Setup in user keybindings by doing `cmd+shit+P`, `open keyboard shortcuts`, and editing to your desire as above.

## Contributing

- `git clone ...`
- `npm i`
- `code .`
- `F5` to open "Extension Development Host" window
- `cmd+n`, write some text, and try `alt+up`
- go back and edit the file, optionally view "Debug Console", save and hit reload on the debug toolbar
- when ready, git commit, push to fork, and make a Pull Request

---

Created by Front-end-captain, 23 Dec 2020

**Enjoy!**
