const rootDomElement = document.getElementById("root");

const rootReactElement = ReactDOM.createRoot(rootDomElement);

// Functional component is function that returns React Element

function Header() {
	const headerReactElement = React.createElement("h1", null, "React Components!");
    const subHeaderReactElement = React.createElement('h2', {className: 'sub'}, 'Components are awesome')
    // const divReactElement = React.createElement('div', null, headerReactElement, subHeaderReactElement)
    const reactFragment = React.createElement(React.Fragment, {}, headerReactElement, subHeaderReactElement)
	return reactFragment;
} 

function Body() {
    return React.createElement(
        'main',
        null,
        React.createElement('p', null, 'Lorem ipsum dolor')
    )
}


function Main() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header),
        React.createElement(Body)
    )
}

rootReactElement.render(React.createElement(Main));
