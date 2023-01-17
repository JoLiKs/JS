<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js" integrity="sha512-E378bwaeZf1nwXeJGIwTB58A5gPt5jFU3u6aTGja4ZdRFJeo/N/REKnBgNZOZlH6JdnOPO98vg2AnSGaNfCMFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
<style>
.el {
border-radius: 50px;
background: green;
width: 100px;
height: 100px;
}
</style>
<div class="el el1">HO</div>
<script>
anime ({
targets: document.querySelector('.el'),
rotate: 360,
duration: 300,
easing: 'linear',
loop: true
})
</script>
</body>
</html
