import styled from 'styled-components';

export const ResetPasswordWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 1000;
  background: #f1f1f1;

  .logo-img {
    position: fixed;
    left: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const ResetPasswordContent = styled.div`
  width:400px;
  margin: 200px auto 0;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  box-sizing: border-box;
`;

export const ResetPasswordHeader = styled.div`
  margin: 0 auto 50px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

export const ResetPasswordBody = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  color: #979797;
`;

export const FormWrapper = styled.form`

  // 重置密码
  .button {
    display: block;
    width: 100%;
    padding: 12px 18px;
    margin-top: 20px;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 25px;
    color: #fff;
    font-size: 15px;
    background: #3194d0;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  > .iconfont {
    position: absolute;
    left: 8px;
    top: 16px;
    font-size: 18px;
    color: #969696;
  }

  // 发送验证码
  .sendCode {
    position: absolute;
    right: 5px;
    top: 8px;
    width: 102px;
    height: 35px;
    color: #fff;
    font-size: 14px;
    border: none;
    outline: none;
    background: #3194d0;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .sendCode:disabled {
    opacity: .5;
  }
`;


export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 4px 12px 4px 35px;
  color: #333;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  background-color: hsla(0, 0%, 71%, .1);

  ::placeholder {
    color: #979797;
  }

  &.user {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }

  &.verificationCode,
  &.password {
    border-bottom: none;
  }


  &._password {
    border-radius: 0 0 4px 4px;
  }
`;
export const ResetPasswordFooter = styled.div`
  margin-top: 25px;
  text-align: center;

  a {
    display: block;
    color: #969696;
    font-size: 13px;

    :hover {
      color: #333;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 14px;
    }
  }

`;
export const OtherAccount = styled.ul`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  .item {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;

    a {
      display: block;
    }

    .iconfont {
      font-size: 24px;
    }

    .weixin {
      color: #00bb29;
    }

    .qq {
      color: #498ad5;
    }
  }
`;

//tip

export const UserTip = styled.div`
  position: absolute;
  left: 104%;
  top: 0;
  width: 200px;
  padding: 10px 20px;
  color: #333;
  font-size: 13px;
  text-align: center;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid #ea6f5a;
  background: #fff;

  :before {
    content: "";
    position: absolute;
    right: 98%;
    top: 40%;
    width: 10px;
    height: 10px;
    border: 1px solid  #ea6f5a;
    border-right: none;
    border-top: none;
    transform: rotate(45deg);
    background: #fff;
  }
`;

export const PhoneTip = styled.div`
  position: absolute;
  left: 104%;
  top: 0;
  width: 200px;
  padding: 10px 20px;
  color: #333;
  font-size: 13px;
  text-align: center;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid #ea6f5a;
  background: #fff;

  :before {
    content: "";
    position: absolute;
    right: 98%;
    top: 40%;
    width: 10px;
    height: 10px;
    border: 1px solid  #ea6f5a;
    border-right: none;
    border-top: none;
    transform: rotate(45deg);
    background: #fff;
  }
`;

export const PasswordTip = styled.div`
  position: absolute;
  left: 104%;
  top: 0;
  width: 200px;
  padding: 10px 20px;
  color: #333;
  font-size: 13px;
  text-align: center;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid #ea6f5a;
  background: #fff;

  :before {
    content: "";
    position: absolute;
    right: 98%;
    top: 40%;
    width: 10px;
    height: 10px;
    border: 1px solid  #ea6f5a;
    border-right: none;
    border-top: none;
    transform: rotate(45deg);
    background: #fff;
  }
`;

export const CodeTip = styled.div`
  position: absolute;
  left: 104%;
  top: 0;
  width: 200px;
  padding: 10px 20px;
  color: #333;
  font-size: 13px;
  text-align: center;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid #ea6f5a;
  background: #fff;

  :before {
    content: "";
    position: absolute;
    right: 98%;
    top: 40%;
    width: 10px;
    height: 10px;
    border: 1px solid  #ea6f5a;
    border-right: none;
    border-top: none;
    transform: rotate(45deg);
    background: #fff;
  }
`;