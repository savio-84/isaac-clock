import styled from 'styled-components';

export const TimerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00cccc;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const TimerContainer = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 200px;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 30%;
        height: 100px;
        font-size: 20px;
        font-weight: 900;

        border-width: 0;
        border-radius: 5px;
    }
    
    .start {
        background-color: #33cc33;
        color: #fff;
    }

    .reset {
        background-color: #ff3333;
        color: #fff;
    }

    .stop {
        background-color: #ff3333;
        color: #fff;
    }

    .add {
        background-color: #e6b800;
        color: #fff;
    }


`;
