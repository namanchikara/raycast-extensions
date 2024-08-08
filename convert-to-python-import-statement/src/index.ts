import { showHUD, Clipboard } from "@raycast/api";


function containsSpace(text: string): boolean {
  return text.includes(' ');
}

function containsPeriod(text: string): boolean {
  return text.includes('.')
}


export default async function main() {
  const text = await Clipboard.readText();

  if (text == undefined || !text.trim()) {
    await showHUD("❌ No text in clipboard!")
    return
  }

  let arr: string[] = text?.split('.');

  if (arr == undefined || arr.length < 2 || containsSpace(text) || !containsPeriod) {
    await showHUD("❌ Invalid input")
    return
  }

  let to_import: string | undefined = arr.pop();
  let from_import: string = arr?.join('.');

  let result: string = `from ${from_import} import ${to_import}`;
  
  await Clipboard.copy(result);
  await showHUD(`✅ Copied ${result} clipboard`);
}
