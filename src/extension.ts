import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "cursor-multi-line" is now active!');

  const disposable = vscode.commands.registerCommand("cursor-multi-line", async (arg) => {
    const opt = Object.assign(
      {
        lineDelta: 8,
        charDelta: 0,
        moveAnchor: true,
        moveActive: true,
      },
      arg || {},
    );

    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
      return;
    }

    const translated = (p: vscode.Position) => {
      const p0 = p.translate(
        p.line + opt.lineDelta < 0 ? -p.line : opt.lineDelta,
        p.character + opt.charDelta < 0 ? -p.character : opt.charDelta,
      );
      const p1 = textEditor.document.validatePosition(p0);
      return p1;
    };

    textEditor.selections = textEditor.selections.map(
      (s, i) =>
        new vscode.Selection(
          opt.moveAnchor ? translated(s.anchor) : s.anchor,
          opt.moveActive ? translated(s.active) : s.active,
        ),
    );

    await vscode.commands.executeCommand("editorScroll", {
      to: opt.lineDelta < 0 ? "up" : "down",
      by: "line",
      value: Math.abs(opt.lineDelta),
      revealCursor: true,
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
