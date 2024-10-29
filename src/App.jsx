import React from 'react';
import Item from './Item.jsx';

const App = () => {
    const items = [
        { id: 1, name: 'Item 1', description: 'This is item 1' },
        { id: 2, name: 'Item 2', description: 'This is item 2' },
        { id: 3, name: 'Item 3', description: 'This is item 3' },
    ];

    return (
        <div className="app">
            <h1>My React App</h1>
            <div className="item-list">
                {items.map(item => (
                    <Item key={item.id} name={item.name} description={item.description} />
                ))}
            </div>
        </div>
    );
};

export default App;
