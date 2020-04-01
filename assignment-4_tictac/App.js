// Use npm i --save-exact native-base@2.13.8
// After an npm start you will get an error
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'native-base';
import { Entypo } from '@expo/vector-icons'; //expo icons

var gameBoard = new Array(9).fill('empty'); // Creates an array with 9 items, and fills each item with elem

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			turnCounter: 0,
			isWinner: false,
			isCross: false,
			winMessage: '',
			bgColor: 'white'
		};
	}

	drawItem = (gridNumber) => {
		this.checkTie();

		//gridNumber is where the user taps
		if (gameBoard[gridNumber] === 'empty') {
			gameBoard[gridNumber] = this.state.isCross;
			this.setState({ isCross: !gameBoard[gridNumber], turnCounter: this.state.turnCounter + 1 });
		}
		// Check For Win
		this.winGame();
	};

	chooseItemIcon = (gridNumber) => {
		//TODO:Choose + or o from expo icons
		if (gameBoard[gridNumber] !== 'empty') {
			return gameBoard[gridNumber] ? 'cross' : 'circle'; // if statement is true return a cross else return circle
		}
		return 'pencil';
	};

	chooseItemColor = (gridNumber) => {
		//TODO:set Color of Icon
		if (gameBoard[gridNumber] !== 'empty') {
			return gameBoard[gridNumber] ? 'red' : 'green'; // if statement is true return a cross else return circle
		}
		return 'black';
	};

	resetGame = () => {
		//TODO: reset state
		gameBoard.fill('empty'); //Fill all with empty
		this.setState({
			winMessage: '',
			turnCounter: 0
		});
		// Force update to the component
		this.forceUpdate();
	};

	winGame = () => {
		//TODO: checkWinner
		if (gameBoard[0] !== 'empty' && gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2]) {
			this.setState({ winMessage: (gameBoard[0] ? 'cross' : 'circle').concat(' win') });
		} else if (gameBoard[0] !== 'empty' && gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6]) {
			this.setState({ winMessage: (gameBoard[0] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[0] !== 'empty' && gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8]) {
			this.setState({ winMessage: (gameBoard[0] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[1] !== 'empty' && gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7]) {
			this.setState({ winMessage: (gameBoard[1] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[2] !== 'empty' && gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6]) {
			this.setState({ winMessage: (gameBoard[2] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[2] !== 'empty' && gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8]) {
			this.setState({ winMessage: (gameBoard[2] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[3] !== 'empty' && gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5]) {
			this.setState({ winMessage: (gameBoard[3] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		} else if (gameBoard[6] !== 'empty' && gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8]) {
			this.setState({ winMessage: (gameBoard[6] ? 'cross' : 'circle').concat(' win'), isWinner: true });
		}
	};
	checkTie = () => {
		if (this.state.turnCounter > 7 && this.state.isWinner == false) {
			this.setState({ winMessage: 'catScratch' });
		}
	};
	turn = () => {
		if (this.state.isCross == false) {
			return 'circle';
		} else {
			return 'cross';
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Current Turn: {this.turn()}</Text>

				{/* Winning Msg */}
				<Text style={styles.winMsg}>{this.state.winMessage}</Text>
				{/* Game Board */}
				<View style={styles.grid}>
					<View style={styles.row}>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(0)}>
								<Entypo name={this.chooseItemIcon(0)} size={50} color={this.chooseItemColor(0)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(1)}>
								<Entypo name={this.chooseItemIcon(1)} size={50} color={this.chooseItemColor(1)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(2)}>
								<Entypo name={this.chooseItemIcon(2)} size={50} color={this.chooseItemColor(2)} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.row}>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(3)}>
								<Entypo name={this.chooseItemIcon(3)} size={50} color={this.chooseItemColor(3)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(4)}>
								<Entypo name={this.chooseItemIcon(4)} size={50} color={this.chooseItemColor(4)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(5)}>
								<Entypo name={this.chooseItemIcon(5)} size={50} color={this.chooseItemColor(5)} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.row}>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(6)}>
								<Entypo name={this.chooseItemIcon(6)} size={50} color={this.chooseItemColor(6)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(7)}>
								<Entypo name={this.chooseItemIcon(7)} size={50} color={this.chooseItemColor(7)} />
							</TouchableOpacity>
						</View>
						<View style={styles.item}>
							<TouchableOpacity onPress={() => this.drawItem(8)}>
								<Entypo name={this.chooseItemIcon(8)} size={50} color={this.chooseItemColor(8)} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{/* Reset Btn */}
				<View>
					<Button onPress={this.resetGame} style={styles.resetBtn}>
						<Text style={{ color: 'white' }}>Reset Game</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	grid: {},
	row: {
		flexDirection: 'row'
	},
	item: {
		padding: 12,
		borderWidth: 2,
		borderColor: 'black'
	},
	winMsg: {
		fontSize: 65,
		margin: 20
	},
	resetBtn: {
		padding: 20,
		margin: 20,
		backgroundColor: 'teal'
	}
});
