const { useState } = React;

// Since we are in a browser, we'll use simple text icons 
// instead of the Lucide library to keep it mobile-friendly.
const Beaker = () => <span>🧪</span>;
const Info = () => <span>ℹ️</span>;
const Cloud = () => <span>☁️</span>;
const Lightbulb = () => <span>💡</span>;
const Check = () => <span>✅</span>;
const X = () => <span>❌</span>;

// ... PASTE THE REST OF YOUR CODE HERE (Starting from const App = () => ...)

// FINALLY, add this at the very bottom so it actually shows up:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
