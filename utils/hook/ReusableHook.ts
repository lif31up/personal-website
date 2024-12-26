function ReusableHook(id: string, value: string) {
  const element: HTMLElement | null = document.getElementById(id);
  if (!element) return;

  if (!element.innerText) {
    element.innerText = value;
  } else {
    console.log("SomeHook: the element's text is not empty.");
  }
}
export default ReusableHook;
