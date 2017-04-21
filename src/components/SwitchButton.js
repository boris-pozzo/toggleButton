import React from 'react';
import './switchButton.css';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchButton: 0, marginComponent: false, name: "CINQS"}
  this.switchLeft = this.switchLeft.bind(this);
  this.switchRight = this.switchRight.bind(this);
  }

  switchLeft(){
    if(this.state.marginComponent){
      this.setState({ switchButton: 0 + "px", marginComponent: !this.state.marginComponent, name: "CINQS"})
    }

  }

  switchRight(){
    if(this.state.marginComponent === false){
      this.setState({ switchButton: 137 + "px", marginComponent: !this.state.marginComponent, name: "XL"})
    }
  }

  render() {
    const styles = {
      margin: { marginLeft: this.state.switchButton},

      flex: {display:"flex"},

      buttonContainer: {
        display: "flex",
        width: "274px",
        height: "40px",
        backgroundColor:"#FAFAFA",
        borderRadius: "50px",
        border: "1px solid #D4D4D4",
        alignItems: "center"
      },

      buttonContainerUl: {
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
        padding: 0,
        width: "100%",
        height: "40px"
      },

      buttonContainerLi: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      },

      buttonSlide : {
        display
        position: "absolute",
        width: "137px",
        height: "40px",
        borderRadius: "50px",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #D4D4D4",
        transitionDuration: "0.5s",
        color: "#35D3B5"
      }
    }

    return (
      <div style={styles.buttonContainer}>
        <ul style={styles.buttonContainerUl}>
          <li onClick={this.switchLeft} style={styles.buttonContainerLi}>CINQS</li>
          <li onClick={this.switchRight} style={styles.buttonContainerLi}>XL</li>
        </ul>
        <div  style={{...styles.margin,...styles.buttonSlide}}>
          {this.state.name}
        </div>
      </div>
    );
  }

}

export default SwitchButton;
