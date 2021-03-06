import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html,body {
	height: 100%;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('./static/iconfont/iconfont.eot?t=1566821937233'); /* IE9 */
  src: url('./static/iconfont/iconfont.eot?t=1566821937233#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./static/iconfont/iconfont.woff?t=1566821937233') format('woff'),
  url('./static/iconfont/iconfont.ttf?t=1566821937233') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/iconfont/iconfont.svg?t=1566821937233#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.clearfix:after {
	content: " ";
	display: block;
	clear: both; 
}
a {
	text-decoration: none;
}
.ellipsis {
	overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#root {
	height: 100%;
}
`;