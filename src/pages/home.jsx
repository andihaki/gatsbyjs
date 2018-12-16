import React from "react";
import styled from "styled-components";
// import styled, { createGlobalStyle } from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";

// const GlobalStyle = createGlobalStyle`
//     body {
//         background-color: black;
//         color: white;
//     }
// `;

const Jobs = styled.h3`
  color: green;
`;

// const WaveSpan = styled.span`
//   position: relative;
//   height: 70px;
//   width: 600px;
//   background: #e0efe3;

//   &:before {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 340px;
//     height: 80px;
//     background-color: white;
//     right: -5px;
//     top: 40px;
//   }

//   &:after {
//     content: "";
//     display: block;
//     position: absolute;
//     border-radius: 100% 50%;
//     width: 300px;
//     height: 70px;
//     background-color: #e0efe3;
//     left: 0;
//     top: 27px;
//   }
// `;

class Home extends React.Component {
  state = {
    texts: [
      "hi internet!",
      "saya seorang software engineer",
      "saya seorang buta warna",
      "saya fans anime one piece",
      "saya fans reactJs",
      "saya seorang kapiten"
    ],
    text: "",
    step: 0,
    typed: true,
    delay: 100,
    nextText: ""
  };

  TIMEOUT;

  componentDidMount() {
    // console.log('cDM');
    const data = Object.assign({}, this.state);

    this.defaultHandler(data);
  }

  componentDidUpdate() {
    // console.log('cDU');
    const data = Object.assign({}, this.state);

    window.clearTimeout(this.TIMEOUT);

    this.defaultHandler(data);
  }

  defaultHandler = data => {
    // console.log('dH');
    const { texts, step, typed } = data;

    // stop at end of texts, & backspace mode
    if (texts.length - 1 === step && !typed) {
      return false;
    }

    if (typed) {
      this.typedHandler(data);
    }
    if (!typed) {
      this.backspaceHandler(data);
    }
  };

  typedHandler = data => {
    // console.log('tH', data);
    const { texts, step, typed, delay } = data;
    let { text, nextText } = data;

    // text : always take 1text start from text.length
    text = text + texts[step].slice(text.length, text.length + 1);
    // nextText : take text.length+1
    nextText = texts[step].slice(text.length + 1);

    const eachEndOfTyped = texts[step] === text;

    // // looping
    // if (text.length > 25) {
    //   return;
    // }

    if (text) {
      this.TIMEOUT = setTimeout(() => {
        this.setState({
          text,
          nextText,
          delay: 32 + Math.round(Math.random() * (eachEndOfTyped ? 2500 : 100)),
          typed: eachEndOfTyped ? !typed : typed
        });
      }, delay);
    }
  };

  backspaceHandler = data => {
    // console.log('bH', data);
    const { delay, typed, step, texts } = data;
    let { text } = data;

    text = text.slice(0, -1);

    const similarText = texts[step]
      .split(" ")
      .filter((a, idx) => a === texts[step + 1].split(" ")[idx])
      .join(" ");
    if (similarText === text) {
      console.log(similarText, text);
      this.setState({
        typed: !typed,
        step: step + 1,
        text: similarText
      });
    }

    const switchMode = text ? typed : !typed;
    const noTextLeft = !text ? step + 1 : step;

    this.TIMEOUT = setTimeout(() => {
      this.setState({
        text,
        delay: 32 + Math.round(Math.random() * 40),
        typed: switchMode,
        step: noTextLeft
      });
    }, delay);
  };

  render() {
    const { text } = Object.assign({}, this.state);
    return (
      <Layout>
        <Header headerText="Home Page" />
        {/* <WaveSpan /> */}
        <Jobs>{text}_</Jobs>

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
      </Layout>
    );
  }
}

export default Home;
