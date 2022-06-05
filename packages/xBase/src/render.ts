// create a render function that takes a component and a target element
// render the component into the target element

export default async function render(component: any, target: Document) {
    let comp = document.createElement("div");
    comp.innerHTML = component
    target.append(comp)
}