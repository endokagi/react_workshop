import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   .red-title {
       color: red;
   }`

const Test = (props) => {
    return (
        <div>
            <img src="scottish-fold-cat.jpg" alt="logo"/>
            <StyledWrapper>
                <h1 className="red-title">Hello World!!</h1>
            </StyledWrapper>
            <p>
                <h1>{props.content}</h1>
            </p>
            <form>
                <label>Username:
                    <input type="text" placeholder="EnDoZaKi"></input>
                </label><br />
                <label>Password:
                    <input type="password"></input>
                </label>
                <p>
                    <button className="loginbtn">Login</button>&nbsp;or&nbsp;
                    <button className="registbtn">Registaion</button>
                </p>

            </form>
        </div>
    )
}



export default Test;