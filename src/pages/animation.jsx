import React from "react";
import { TimelineLite } from "gsap/all";

const elementsArray = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas molestias asperiores libero ad, pariatur id vitae quaerat quos adipisci maxime? Debitis, placeat similique. Dolore beatae enim at temporibus voluptate.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsa alias, corrupti molestiae mollitia fugiat porro tenetur nesciunt nam minima quod deleniti eos molestias ullam aspernatur hic iure sint magni!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reiciendis, corporis porro enim pariatur accusantium soluta, dicta nostrum fugit, hic incidunt libero a modi laboriosam sint harum ratione ullam natus!",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates natus delectus ex corrupti iure expedita ea repellat laborum sint temporibus sequi autem quia blanditiis distinctio, officia ipsa et nesciunt."
];

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    // this.myElement = null;
    // this.myTween = null;

    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
  }

  componentDidMount() {
    // this.myTween = TweenLite.to(this.myElement, 1, { x: 100, y: 100 });
    // this.myTween
    //   .to(this.myElement, 0.5, { x: 100 })
    //   .to(this.myElement, 0.5, { y: 100, rotation: 180 })
    //   .play();
    this.myTween.staggerFrom(this.myElements, 0.5, { y: -200 }, 0.3);
    this.myTween.play();
  }

  render() {
    // return <div ref={div => (this.myElement = div)}>Here Long Text</div>;
    return (
      <div>
        <ul>
          {elementsArray.map((element, index) => (
            <li key={index} ref={li => (this.myElements[index] = li)}>
              {element}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// export default Animation;
