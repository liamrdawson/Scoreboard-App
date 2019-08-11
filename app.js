const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter />
        </div>
    );
}


class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => ({score: prevState.score +1}));
    }

    decrementScore = () => {
        this.setState( prevState => ({ score: prevState.score -1}));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score"> {this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}


class App extends React.Component {

    state = {
        players: [
            { name: "Liam",
                id: 1 },
            { name: "Toby",     
                id: 2 },
            { name: "Kelly",    
                id: 3 },
            { name: "Owen",     
                id: 4 },
            { name: "Lydia",    
                id: 5 },
            { name: "Louise",   
                id: 6 }
        ]
    };

    render(){
        return (
            <div className="scoreboard">
                <Header title="Fantasy Football Scoreboard" 
                        totalPlayers={this.state.players.length} />
    
                {/*Player List*/}
                {this.state.players.map( player =>
                    <Player 
                        name={player.name} 
                        key={player.id}
                    />
                )}
                
            </div> //scoreboard
        );
    } 
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);