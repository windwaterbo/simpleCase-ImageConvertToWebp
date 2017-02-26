# Introduction

[I have case study using WebP](https://www.slideshare.net/MacyKung/simple-case-using-webp)

So I make a simple sample for batch converter that image convert to WebP format.
It's using [webp-converter](https://github.com/scionoftech/webp-converter). -> index.js

And I test the performance of WebP on browser. -> test.html

## the performance picture as follows

![performace](https://goo.gl/HVglg3)

- 1AAKna is the origin image, a.jpg. size is 392B
- wyxAUB is -q 80, a.webp. size is 176B
- iFhmoT is -q 60, a-60.webp. size is 134B
- nSO2ly is -q 40, a-40.webp. size is 132B

It's miracle. The size is reduce half from origin image and they can be accepted on my eyes.

## The WebP is supported on specific platform

I have integration quick point.

- Browser
    - Chrome 23
    - Opera 12.1
    - FireFox [has bug](https://bugzilla.mozilla.org/show_bug.cgi?id=856375)
    - IE  not support
    - Safari in IOS 10
- iOS
    - using the SDK : [SDWebImage](https://github.com/rs/SDWebImage)
- Android
    - Android 4.0+
    - (Lossless, Transparency, Android 4.2.1+) 

The chineses slideshare on it : [Simple Case using WebP](https://www.slideshare.net/MacyKung/simple-case-using-webp)