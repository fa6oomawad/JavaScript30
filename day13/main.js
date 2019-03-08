   html {
      box-sizing: border-box;
      background: #ffc600;
      font-family: 'helvetica neue';
      font-size: 20px;
      font-weight: 200;
    }
    
    body {
      margin: 0;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    h1 {
      margin-top: 0;
    }
    .site-wrap {
      max-width: 700px;
      margin: 100px auto;
      background: white;
      padding: 40px;
      text-align: justify;
    }
    .align-left {
      float: left;
      margin-right: 20px;
    }
    .align-right {
      float: right;
      margin-left: 20px;
    }
    .slide-in {
      opacity: 0;
      transition: all .5s;
    }
    .align-left.slide-in {
      transform: translateX(-30%) scale(0.95);
    }
    
    .align-right.slide-in {
      transform: translateX(30%) scale(0.95);
    }
    .slide-in.active {
      opacity: 1;
      transform: translateX(0%) scale(1);
    }