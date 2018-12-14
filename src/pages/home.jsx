import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        color: white;
    }
`;

const Jobs = styled.h3`
  color: yellow;
`;

class Home extends React.Component {
  state = {
    texts: [
      'hi internet!',
      'saya test',
      'saya seorang buta warna',
      'saya seorang kapiten',
      'saya Son Goku',
    ],
    text: '',
    step: 0,
    typed: true,
    delay: 100,
    nextText: '',
  }

  TIMEOUT;

  componentDidMount(){
    // console.log('cDM');
    const data = Object.assign({}, this.state);
    
    this.defaultHandler(data);
  }  

  componentDidUpdate(){
    // console.log('cDU');
    const data = Object.assign({}, this.state);
    
    window.clearTimeout(this.TIMEOUT);
    
    this.defaultHandler(data);
  }

  defaultHandler = (data) => {
    // console.log('dH');
    const { texts, step, typed } = data;
    
    // stop at end of texts, & backspace mode 
    if (texts.length-1 === step && !typed) {
      return false;
    }
    
    if (typed) {
      this.typedHandler(data);  
    }
    if (!typed) {
      this.backspaceHandler(data);
    }
    
  }
  
  typedHandler = (data) => {
    // console.log('tH', data);
    const { texts, step, typed, delay } = data;
    let { text, nextText } = data;
    
    // text : always take 1text start from text.length
    text = text + texts[step].slice(text.length, text.length+1);
    // nextText : take text.length+1
    nextText = texts[step].slice(text.length+1);
    
    const eachEndOfTyped = texts[step] === text;
    
    // looping
    if (text.length > 25) {
      return;
    }

    // if (!text) {
    //   console.log(step+1)
    //   this.setState({
    //     typed: !typed,
    //     nextStep: step + 1,
    //   });
    // }
    
    if (text) {
      this.TIMEOUT = setTimeout(() => {
        this.setState({
          text,
          nextText,
          delay: 32 + Math.round(Math.random() * (eachEndOfTyped ? 2500 : 100)),
          typed: eachEndOfTyped ? !typed : typed,
        });
      }, delay) 
    }
  }
  
  backspaceHandler = (data) => {
    // console.log('bH', data);
    const { delay, typed, step, texts } = data;
    let { text } = data;

    text = text.slice(0, -1);
    
    const similarText = texts[step].split(" ").filter((a, idx) => a === texts[step + 1].split(" ")[idx]).join(" ");
    if (similarText === text) {
      console.log(similarText, text);
      this.setState({
        typed: !typed,
        step: step+1,
        text: similarText,
      });
    }

    const switchMode = text ? typed : !typed;
    const noTextLeft = !text ? step+1 : step;
    
    this.TIMEOUT = setTimeout(() => {
      this.setState({
        text,
        delay: 32 + Math.round(Math.random() * 40),
        typed: switchMode,
        step: noTextLeft,
      })
    }, delay);
  }

  render() {
    const { text } = Object.assign({}, this.state);
    return (
      <div>
        <GlobalStyle />
        <Header headerText="Home Page" />
        <Jobs>
          {text}_
        </Jobs>
        

        <div>
          Masih tinggal di Jakarta, Indonesia.{" "}
          <u>
            (tersedia untuk kerja remote atau <em>overseas</em>)
          </u>
        </div>

        <div>Social Media</div>
        <div>Github | Instagram | Youtube | Medium | Unsplash</div>

        <div>Website ini dibangun dengan:</div>
        <div>GatsbyJS | ReactJs | GraphQL | GitLab Pages</div>

        <div />
      </div>
    );
  }
}

export default Home;
