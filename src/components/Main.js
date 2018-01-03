require('normalize.css/normalize.css');
require('styles/App.scss');
const imageData = require('../imageData.json');

import React from 'react';

// 将 json 里面的 img 通过require 引入到本页面 直接用路径去引用图片 容易出错 打包之后图片地址会变化
const imageDatas = (function genImgUrls(imageData){
    imageData.map(function(value){
        value.imgUrl = require('../images/'+value.fileName);
    })
    return imageData;
}(imageData));


class AppComponent extends React.Component {
  render() {
    return (
      <section id="gallery">
          <section className="imgSec"></section>
          <nav className="controllerNav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
