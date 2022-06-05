// create a render function that takes a component and a target element
// render the component into the target element



export default function render(element: HTMLElement, container: Document) {
    process.stdout.write(element.innerHTML)
    container.append(element.innerHTML);
}

