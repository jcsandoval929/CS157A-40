import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            emp: []
        };
    }

    async componentWillMount() {
        try {
            let r = await fetch('/api/emp');
            let emp = await r.json();
            this.setState({ emp });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container">
                <h1 className="text-primary text-center">FlyNow</h1>
                <ul className="list-group">
                    {this.state.emp.map(emp => {
                        return <li className="list-group-item">{emp.name}</li>
                    })}
                </ul>
            </main>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
    emp: Array<any>;
}

export default App;