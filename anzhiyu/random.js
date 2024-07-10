var posts=["CF-workers-vless免费节点/","hello-world/","免费申请US-KG二级域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };