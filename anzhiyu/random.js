var posts=["2024/07/07/hello-world/","2024/07/05/免费申请US-KG二级域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };