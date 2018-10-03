import { h, render } from 'preact';

const Clock = () => <div>{new Date().toLocaleTimeString()}</div>;

render(<Clock />, document.body);
