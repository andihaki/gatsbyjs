import React from "react";

let TIMEOUT = "";

const typedHandler = data => {
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
    TIMEOUT = setTimeout(() => {
      this.setState({
        text,
        nextText,
        delay: 32 + Math.round(Math.random() * (eachEndOfTyped ? 2500 : 100)),
        typed: eachEndOfTyped ? !typed : typed
      });
    }, delay);
  }
};

const backspaceHandler = data => {
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

  TIMEOUT = setTimeout(() => {
    this.setState({
      text,
      delay: 32 + Math.round(Math.random() * 40),
      typed: switchMode,
      step: noTextLeft
    });
  }, delay);
};

export default props => {
  console.log(props.data);
  const { texts, step, typed } = props.data;

  // stop at end of texts, & backspace mode
  if (texts.length - 1 === step && !typed) {
    return false;
  }

  if (typed) {
    return typedHandler(props.data);
  }
  if (!typed) {
    return backspaceHandler(props.data);
  }
};
