function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

var myId;
var myUrl;

$('#myBtn').click(function () {
    myUrl = $('#myUrl').val();
    if(getId(myUrl)!==myId &&
        myUrl.slice(0,25)=="https://www.youtube.com/w"){
        document.title = "Comments: " + myUrl;
        myId = getId(myUrl);
        $('#myId').html(myId);
        $('#myCode').html('<iframe width="1080" height="520" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');

        DISQUS.reset({
            reload: true,
            config: function () {  
                this.page.identifier = myId;  
                this.page.url = "https://www.youtube.com/watch?v="+myId;
            }
        });
    }
});

var disqus_config = function () {
    if(myUrl.slice(0,25)=="https://www.youtube.com/w") {
        this.page.url = "https://www.youtube.com/watch?v="+myId;
        this.page.identifier = myId;
    }
};


(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://custom-url.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();