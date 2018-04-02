var YouTube = /** @class */ (function () {
    //videoid:any;
    function YouTube(auth_key, auth_secret) {
        var _this = this;
        this.getVideoTitle = function (videoid) {
            return _this.videotitle = "Title From this " + videoid;
        };
        this.getVideolikes = function (videoid) {
            return _this.videolike = 200;
        };
        this.getVideoEntry = function (videoid) {
            var Entry = ["Name Of Video", "Description", "view_count-2000", "like_count-1000"];
            return _this.fullentry = Entry;
        };
        this.getRelatedVideo = function (videoid) {
            console.log('https://www.youtube.com/watch?v=oPbeX1LXGsg');
        };
        this.getVideoCommentFeed = function (videoid) {
            console.log('video comment');
        };
        this.getTopRatedVideo = function () {
            console.log('Top Video: https://www.youtube.com/watch?v=oPbeX1LXGsg');
        };
        this.getMostPopularVideo = function () {
            console.log('https://www.youtube.com/watch?v=oPbeX1LXGsg');
        };
        this.getRecentlyFeaturedVideo = function () {
            return 'Recent Video: https://www.youtube.com/watch?v=oPbeX1LXGsg';
        };
        this.getMostSubscribers = function () {
            console.log('MostSubscribers: Edwisor');
        };
        this.auth_key = auth_key;
        this.auth_secret = auth_secret;
    } // end constructor
    return YouTube;
}());
var youTube = new YouTube("123455", "6788999");
var title = youTube.getVideoTitle("oPbeX1LXGsg");
console.log(title);
var likes = youTube.getVideolikes("oPbeX1LXGsg");
console.log("total likes count-" + likes);
var recentvideos = youTube.getRecentlyFeaturedVideo();
console.log(recentvideos);
var fullEntry = youTube.getVideoEntry("oPbeX1LXGsg");
console.log(fullEntry);
var top_video = youTube.getTopRatedVideo();
var get_most_subs = youTube.getMostSubscribers();
