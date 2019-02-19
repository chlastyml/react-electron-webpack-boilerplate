import '../assets/css/App.css';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
    { key: "id", name: "ID", editable: true },
    { key: "title", name: "Title", editable: true },
    { key: "complete", name: "Complete", editable: true }
];

const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
];

var divStyle = {
    color: 'red',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

class App extends React.Component {
    state = { rows };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };

    render() {
        return (
            <div style={divStyle}>
                <h1>Hello, Electron!</h1>

                <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>

                <p>{this.state.name}</p>

                <ReactDataGrid
                    columns={columns}
                    rowGetter={i => this.state.rows[i]}
                    rowsCount={5}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={false}
                />
            </div>
        )
    };
}

export default App;
