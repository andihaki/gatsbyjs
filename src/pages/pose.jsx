import React from "react";
import posed from "react-pose";

const Sidebar = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: "-100%", delay: 300 }
});

const Item = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: 20, opacity: 0 }
});

export default class Pose extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar className="sidebar" pose={isOpen ? "open" : "closed"}>
        <Item className="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          voluptates assumenda quo animi nisi illum inventore mollitia debitis
          vero, velit veritatis nihil exercitationem ratione consectetur impedit
          ducimus dolorem doloremque magnam.
        </Item>
        <Item className="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          voluptates assumenda quo animi nisi illum inventore mollitia debitis
          vero, velit veritatis nihil exercitationem ratione consectetur impedit
          ducimus dolorem doloremque magnam.
        </Item>
        <Item className="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          voluptates assumenda quo animi nisi illum inventore mollitia debitis
          vero, velit veritatis nihil exercitationem ratione consectetur impedit
          ducimus dolorem doloremque magnam.
        </Item>
        <Item className="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          voluptates assumenda quo animi nisi illum inventore mollitia debitis
          vero, velit veritatis nihil exercitationem ratione consectetur impedit
          ducimus dolorem doloremque magnam.
        </Item>
        <Item className="item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          voluptates assumenda quo animi nisi illum inventore mollitia debitis
          vero, velit veritatis nihil exercitationem ratione consectetur impedit
          ducimus dolorem doloremque magnam.
        </Item>
      </Sidebar>
    );
  }
}
