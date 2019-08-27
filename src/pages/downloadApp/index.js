import React from 'react';
import BackTop from '../../common/backTop';
import {
  DownloadWrapper,
  HeaderWrapper,
  HeaderContent,
  QrcodeWrapper,
  Block,
  Footer,
  BackTopWrapper
} from './styled';
import logoPic from '../../static/logo1.png';
import bgImg from '../../static/bg-img1.png';
import contentImg1 from '../../static/content-img1.png';
import qrcode from '../../static/download-img.png';
import contentImg2 from '../../static/content-img2.png';
import contentImg3 from '../../static/content-img3.png';
import contentImg4 from '../../static/content-img4.png';
import contentImg5 from '../../static/content-img5.png';


export default () => {
  BackTop.BackToTop(0);
  
  return (
    <DownloadWrapper>
      <HeaderWrapper>
        <HeaderContent>
          <div className="top-logo">
            <img alt="logo" src={logoPic} className="logo-img" />
            <div className="info">
              <h3 className="title">创作你的创作</h3>
              <p className="slogan">一个优质创作社区</p>
            </div>
          </div>
          <img alt="bg" src={bgImg} className="bg-img" />
          <div className="line">
            <img alt="img" src={contentImg1} className="content-img1" />
            <QrcodeWrapper>
              <img alt="qrcode" src={qrcode} className="qrcode" />
              <p className="title">扫码下载简书App</p>
              <p className="desc">随时随地发现和创作内容</p>
            </QrcodeWrapper>
          </div>
        </HeaderContent>
      </HeaderWrapper>
      <Block>
        <div className="wrap">
          <div className="info">
            <h3 className="title">轻松创作精美图文</h3>
            <p className="desc">简单优雅的设计，可以一次上传多张图片、实时保存、多端同步，使创作分享更方便快捷</p>
          </div>
          <img alt="img" src={contentImg2} className="content-img2" />
        </div>
      </Block>
      <Block>
        <div className="wrap">
          <div className="info multi">
            <h3 className="title">多元化的创作社区</h3>
            <p className="desc">一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</p>
          </div>
          <img alt="img" src={contentImg3} className="content-img3" />
        </div>
      </Block>
      <Block>
        <div className="wrap">
          <div className="info writer">
            <h3 className="title">百万创作者在简书相遇</h3>
            <p className="desc">在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</p>
          </div>
          <img alt="img" src={contentImg4} className="content-img4" />
        </div>
      </Block>
      <Block>
        <div className="wrap">
          <div className="info free">
            <h3 className="title">自由地交流和沟通</h3>
            <p className="desc">你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</p>
          </div>
          <img alt="img" src={contentImg5} className="content-img5" />
        </div>
      </Block>
      <Footer>
        <div className="wrap">
          <div className="qrcode-wrapper">
            <img alt="qrcode" src={qrcode} className="qrcode" />
            <p className="title">扫码下载简书App</p>
          </div>
          <div className="bottom-logo">
            <img alt="logo" src={logoPic} className="logo-img" />
            <div className="info">
              <h3 className="title">创作你的创作</h3>
              <p className="slogan">一个优质创作社区</p>
            </div>
          </div>
        </div>       
      </Footer>
      <BackTopWrapper>
        <BackTop />
      </BackTopWrapper>
    </DownloadWrapper>
  );
};
