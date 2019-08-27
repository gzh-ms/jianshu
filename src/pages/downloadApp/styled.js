import styled from 'styled-components';

export const DownloadWrapper = styled.div`
  padding-top: 56px;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  padding-top: 50px;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsla(0,0%,59%,0));
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  width: 960px;
  margin: 0 auto;

  .top-logo {
    overflow: hidden;
    width: 312px;
    margin: 0 auto;

    .logo-img {
      float: left;
      width: 100px;
      height: 100px;
    }

    .info {
      float: left;
      height: 100%;
      margin-left: 20px;
      text-align: left;

      .title {
        padding: 10px 0;
        color: #333;
        font-size: 30px;
      }

      .slogan {
        padding-top: 5px;
        font-size: 24px;
        font-weight: 300;
      }
    }
  }

  .bg-img {
    position: absolute;
    top: 50px;
    left: 100px;
    z-index: -1;
    width: 765px;
    height:172px;
  }

  .line {
    overflow: hidden;
  }

  .content-img1 {
    float: left;
    width: 410px;
    height: 314px;
    margin-top: 50px;
    margin-left: 150px;
  }
`;

export const QrcodeWrapper = styled.div`
  float: left;
  margin-left: 40px;
  margin-top: 100px;

  .qrcode {
    display: block;
    width: 140px;
    height: 140px;
  }

  .title {
    margin-top: 4px;
    font-size: 24px;
    line-height: 30px;
  }

  .desc {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
  }
`;

export const Block = styled.div`
  padding: 30px 0;

  .wrap {
    overflow: hidden;
    position: relative;
    width: 960px;
    margin: 50px auto 0;

    .content-img2 {
      display: block;
      width: 960px;
      height: 377px;
    }

    .content-img3 {
      display: block;
      width: 440px;
      height: 360px;
    }

    .content-img4 {
      float: right;
      width: 480px;
      height: 310px;
    }

    .content-img5 {
      display: block;
      width: 440px;
      height: 330px;
    }

    .info {
      position: absolute;
      left: 50px;
      top: 0;
      width: 410px;

      .title {
        font-size: 28px;
        font-weight: 400;
        margin: 20px 0 ;
      }

      .desc {
        font-size: 18px;
        font-weight: 300;
        line-height: 30px;
      }

      &.multi {
        top: 120px;
        left: 55%;
      }

      &.writer {
        top: 80px;
      }

      &.free {
        left: 55%;
        top: 120px;
      }
    }
  }
`;

export const Footer = styled.div`
  padding: 30px 0 70px;

  .wrap {
    width: 960px;
    margin: 0 auto;

    .qrcode-wrapper {
      text-align: center;

      .qrcode {
        width: 140px;
        height: 140px;
      }
    
      .title {
        margin-top: 4px;
        font-size: 24px;
        line-height: 30px;
        font-weight: 350;
      }
    }

    .bottom-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    
      .logo-img {
        width: 56px;
        height: 56px;
      }
  
      .info {
        height: 100%;
        margin-left: 20px;
        text-align: left;
  
        .title {
          padding: 5px 0;
          color: #333;
          font-size: 17px;
        }
  
        .slogan {
          padding-top: 5px;
          font-size: 15px;
          font-weight: 300;
        }
      }
    }
  }
`;

export const BackTopWrapper = styled.div`
  position: fixed;
  right: 70px;
  bottom: 70px;
`;
