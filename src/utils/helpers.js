export function mdToHtml(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^#{1,3} (.+)$/gm, "<strong>$1</strong>")
    .replace(/^[\-\*] (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, (m) => `<ul>${m}</ul>`)
    .split("\n\n")
    .map(p => p.startsWith("<ul>") || p.startsWith("<strong>") ? p : `<p>${p}</p>`)
    .join("");
}
