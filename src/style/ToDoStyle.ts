import styled from "styled-components";

const ContainerEl = styled.div`
    padding: 0 20px;
    max-width: 500px;
    margin: 0 auto;
`;
const HeaderEl = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
    h1 {
        font-size: 20px;
        font-weight: 700;
    }
`;

const InputContainerEl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    input {
        width: 85%;
    }
`;
const InputEl = styled.input`
    border: none;
    padding: 8px 10px;
    border-radius: 10px;
`;
const ButtonEl = styled.button`
    border-radius: 5px;
    padding: 8px 10px;
    cursor: pointer;
`;

const ToDoListEl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ToDoEl = styled.li`
    position: relative;
    padding: 15px 25px;
    &::before {
        position: absolute;
        content: "✨";
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
`;

export {
    ContainerEl,
    HeaderEl,
    InputContainerEl,
    InputEl,
    ButtonEl,
    ToDoListEl,
    ToDoEl,
};
