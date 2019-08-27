import styled from 'styled-components';

export const LoginWrapper = styled.div`
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

export const LoginContent = styled.div`
  width: 400px;
  margin: 200px auto 0;
  padding: 50px 50px 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  box-sizing: border-box;
`;

export const LoginHeader = styled.div`
  margin: 0 auto 50px;
  padding: 10px;
  text-align: center;  

  .login,
  .split,
  .reg {
    padding: 10px;
    color: #969696;
    font-size: 18px;
    cursor: pointer;
  }

  .active {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }

  .login:hover,
  .reg:hover {
    border-bottom: 2px solid #ea6f5a;
  }
`;

export const LoginBody = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  color: #979797;

  .line {
    position: relative;
    height: 15px;
    line-height: 15px;
    margin-top: 15px;

    .remember {
      float: left;
      padding: 0;
      margin: 0;
    }

    .problem {
      float: right;
      cursor: pointer;

      :hover {
        color: #333;
      }
    }
  }

  // 登录
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

  .iconfont.lock {
    top: 15px;
    font-size: 20px;
  }
`;

export const TipWrapper = styled.div`
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

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  font-size: 14px;

  outline: none;
  box-sizing: border-box;
  background-color: hsla(0, 0%, 71%, .1);

  ::placeholder {
    color: #979797;
  }

  &.user {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }

  &.verify {
    border-bottom: none;
  }

  &.password {
    border-radius: 0 0 4px 4px;
  }
`;

export const VerifyCode = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  z-index: 1000;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #000;
  font-size: 14px;
  font-weight: 300;
  background: lightskyblue;
  cursor: pointer;
  border-radius: 4px;
`;

export const Loginfooter = styled.div`
  margin-top: 35px;

  .title {
    position: relative;
    margin-bottom: 10px;
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;
  }

  .title:before,
  .title:after {
      content: " ";
      position: absolute;
      top: 5px;
      display: block;
      width: 60px;
      height: 1px;
      background: #b5b5b5;
    }

  .title:before {
      left: 30px;
    }

  .title:after {
      right: 30px;
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

    .weibo {
      color: #e05244;
    }

    .qq {
      color: #498ad5;
    }

    .douban {
      color: #00820f;
    }
  }
`;

export const ProblemWrapper = styled.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 2000;
  min-width: 160px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
`;

export const PromblemItem = styled.li`

  a {
    display: block;
    padding: 10px 20px;   
    color: #333;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
  
    :hover {
      background: #f5f5f5;
    }
  }
`;
