import React from "react";
import Background from './images/bikini-bottom.png'
import Image from './images/spongebob.jpg'

export default class App extends React.Component {
  state = {
    ballX: 0,
    ballY: 10,
    dx: 5,
    dy: 4,
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, 50);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ballX > 1100 - ballSize) {
      this.setState({
        dx: -5,
        ballX: 1100 - ballSize,
      });
    }
    if (prevState.ballX < 1) {
      console.log(prevState.ballX);
      this.setState({
        dx: 5,
        ballX: 1,
      });
    }
    if (prevState.ballY > 600 - ballSize) {
      this.setState({
        dy: -4,
        ballY: 600 - ballSize,
      });
    }
    if (prevState.ballY < 1) {
      this.setState({
        dy: 4,
        ballY: 1,
      });
    }
  }
  tick() {
    const { ballX, ballY, dx, dy } = this.state;
    console.log(ballX);
    console.log(ballY);
    const newBallX = ballX + dx;
    const newBallY = ballY + dy;
    this.setState({
      ballX: newBallX,
      ballY: newBallY,
    });
  }
  render() {
    const { ballX, ballY } = this.state;
    return (
      <div style={styles}>
        <div style={{ ...ballStyles, top: ballY, left: ballX, }}>
        </div>
      </div>
    );
  }
}
const length = 400;
const ballSize = 70;
const ballStyles = {
  position: "absolute",
  backgroundImage: `url(${Image})`,
  width: `${ballSize}px`,
  height: `${ballSize}px`,
  borderRadius: `50%`,
  
};
const styles = {
  position: "relative",
  // background: " grey",
  backgroundImage: `url(${Background})`,
  margin: "auto",
  border: "1px solid",
  width: "1100px",
  height: "600px",
};