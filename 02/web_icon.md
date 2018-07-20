# Icon

[TOC]

------



## 기존 사용 방법

대부분 아래와 같이 모든 아이콘을 한 이미지에 저장하여(image stripe), 태그마다 background-position 변경하는 방식으로 아이콘을 설정하였습니다.

<img src="http://gscdn.hackers.co.kr/champ/images/champstudy/common/bullet2.png">

```css
.ico_comm {
    display: inline-block;
    background: url(http://gscdn.hackers.co.kr/champ/images/champstudy/common/bullet2.png) no-repeat
}

.ico_speaker{width:25px;height:18px;background-position:0 -14px}
.ico_new{width:12px;height:12px;background-position:0 -37px;margin:-2px 0 0 7px;vertical-align:middle}
.ico_hand{width:20px;height:20px;background-position:0 -77px}
.ico_chk{width:21px;height:21px;background-position:0 -102px}
.ico_memo{width:15px;height:19px;background-position:0 -128px}
```

```html
<span class="ico_comm ico_speaker"></span>
```

해당방식의 단점은

이미지 방식으로 확대나 축소시 이미지가 깨질 우려가 있어 크기조절이 불가능하고,

배경색상이나 아이콘색상 변경, 그 외  CSS의 효과를 적용할 수 없다는 단점을 가지고 있습니다.

해당 단점을 보완할 수 있은 새로운 방법을 알아봅시다!



------



## CSS Icon

아래와 같이 비교적 간단한 아이콘은 CSS만으로도 제작할 수 있습니다.

<img src="http://www.hackersut.com/images/event/2018/040300/icon.gif">

```CSS
//화살표
[class^='icon-']{
    display: inline-block;
    position: relative;
    width: 2.5em;
    height: 2.5em;
    font-size: 10px;
    box-sizing: border-box;
    vertical-align: middle;
}

.icon-arr:before{
    display:block;
    content:'';
    position: absolute;
    top: 0.7em;
    left: 0.5em;
    width: 1.0em;
    height: 1.0em;
    border: 0.2em solid #333;
    border-right-width: 0;
    border-bottom-width: 0;
    transform: rotate(135deg);
}
```



[활용예시보러가기](http://13.124.101.236/khy_work/02_icon_css_example.html)



> 참고 URL 
>
> <http://www.uiplayground.in/css3-icons/>
> <https://saeedalipoor.github.io/icono/>



------



## Font awesome

> Font awesome은 가장 유명하고 대표적인 아이콘폰트 제공 사이트
>
> 현재 무료로 사용할 수있는 아이콘이 989개 이며, 빠르게 업데이트 되고 있습니다.
>
> https://fontawesome.com/



크기 / 색상 / 배경색 / 그림자효과 등 CSS 기능을 사용해서 자유롭게 변경 가능한 font 형식의 벡터 아이콘,

이미지 형식들과 달리 크기를 줄이거나 키워도 깨지지 않으며, 어느기기에서나 선명하게 구현됩니다.



### 구현 방법

- **Web Fonts with CSS**
  https://fontawesome.com/how-to-use/web-fonts-with-css
  웹폰트 방식


- **SVG with JavaScript** 

  SVG는 2차원 벡터 그래픽을 표현하기 위한 XML 기반의 파일 형식으로, 

  1999년 W3C 주도하에 개발된 오픈 그래픽 표준이다. 

  때문에 IE8 이전 버전을 제외한 대부분의 브라우저에서 지원된다. 

  사이즈가 변화함에 따라 깨지지 않는 png, jpg 등의 레스터 이미지와는 달리, SVG는 벡터 기반이기 때문에 사이즈 변화에 전혀 지장이 없다.

  https://fontawesome.com/how-to-use/svg-with-js

  ​



## 사용하는 방법

1. 웹폰트와 같이 직접 다운받아 서버에 업로드하거나 배포 사이트에서 제공하는 cdn서버를 호출하여 사용

   ```html
   //web fonts
   <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/> 

   //svg
   <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
   ```

2. 적용하려는 아이콘을 태그에 사용하려면 **클래스명을 확인**
   css를 통해서 사용하려면 **유니코드 값을 확인** :before, :after를 이용하여 content:'유니코드값'

   ```html
   //태그방식
   <i class="fas fa-user"></i>
   ```

   ```css
   //유니코드방식
   [class^='icon-']:before,
   [class^='icon-']:after{font-size:2em;font-family:"Font Awesome 5 Free";font-weight:900;vertical-align:middle}

   .icon-user:before{content:'\f007'}
   ```




[사용예시보러가기](http://13.124.101.236/khy_work/02_icon_font_example.html)



> **tip.** 실질적으로 사용하는 아이콘만 폰트로 만들기
>
> 기본적으로 font awesome 호출되는 웹폰트 용량은 60KB 정도로 크기가 부담이 된다면 실질적으로 사용하는 아이콘으로만 웹폰트를 제작할수 있습니다.
>
> 아이콘 만들기 - http://fontello.com/
>
> 참고- https://junistory.blogspot.kr/2017/08/icon-font_2.html





## 브라우저 지원

| Browser | Desktop                                                      | Mobile                         |
| ------- | ------------------------------------------------------------ | ------------------------------ |
| Edge    | Last 2 major versions                                        |                                |
| IE      | Versions 11, 10, 9                                           |                                |
| Chrome  | Last 2 major and [business](https://enterprise.google.com/chrome/chrome-browser) versions | iOS latest and Android 6, 5, 4 |
| Firefox | Last 2 major and [ESR](https://www.mozilla.org/en-US/firefox/organizations) versions | iOS latest and Android 6, 5, 4 |
| Safari  | Last 2 major versions                                        | iOS 9+                         |
| Opera   | Last 2 major versions                                        |                                |
| Yandex  | 14                                                           |                                |



------



## SVG

2탄으로~