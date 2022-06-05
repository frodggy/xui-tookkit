type nsx = string;


 
const createElement = (tag: string, props: object, ...children: Node[]) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	children.forEach((child) => {
		element.appendChild(
			child.nodeType === undefined
				? document.createTextNode(child.toString())
				: child
		)
	})

	return element
}


export default createElement
// export default function nsx(template: nsx): nsx {
//     return `${template}`
// }