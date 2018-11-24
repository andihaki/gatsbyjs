import React from "react";
import styled from "styled-components";

const BurgerBar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
`;

const FirstBurgerBar = styled(BurgerBar)`
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
`;

const SecondBurgerBar = styled(BurgerBar)`
    opacity: 0;
`;

const ThirdBurgerBar = styled(BurgerBar)`
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
`;

export default ({menu, change, onClick}) => {
    if (!change) {
        console.log(change, onClick);
        return (
            <div>
                <FirstBurgerBar />
                <SecondBurgerBar />
                <ThirdBurgerBar />
            </div>
        )
    }
    return menu.map(num => <BurgerBar key={num} />)
};
    
//     return <div>
//         <BurgerBar />
//         <BurgerBar />
//         <BurgerBar />                
//     </div>    
// }    
