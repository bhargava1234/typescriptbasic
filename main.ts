class YouTube {

    auth_key : string;
    auth_secret : string;
    videotitle : string;
	videolike : number;
    fullentry: string[];
    //videoid:any;
	
     constructor (auth_key : string,auth_secret : string){
       this.auth_key = auth_key;
       this.auth_secret = auth_secret;
      
    }// end constructor

	
   getVideoTitle = (videoid:any) => {
	   
	   return this.videotitle="Title From this " +videoid;
	   
   }
   
   getVideolikes = (videoid:any) => {
	   
	   return this.videolike=200;
	   
   }
   
   getVideoEntry = (videoid:any) => {
	   
     let Entry= ["Name Of Video","Description","view_count-2000","like_count-1000"];
	 
	 return this.fullentry=Entry;
   }
   
   
   
   
   getRelatedVideo = (videoid:any) => {
	   
	   console.log('https://www.youtube.com/watch?v=oPbeX1LXGsg');
	   
   }
   
   getVideoCommentFeed = (videoid:any) => {
	   
	   console.log('video comment');
	   
   }
   
   getTopRatedVideo = () => {
	   
	   console.log('Top Video: https://www.youtube.com/watch?v=oPbeX1LXGsg');
	   
   }
   
   getMostPopularVideo = () => {
	   
	   console.log('https://www.youtube.com/watch?v=oPbeX1LXGsg');
	   
   }
   
   getRecentlyFeaturedVideo = () => {
	   
	 return 'Recent Video: https://www.youtube.com/watch?v=oPbeX1LXGsg';
	   
   }

   
   getMostSubscribers = () => {
	   
	   console.log('MostSubscribers: Edwisor');
	   
   }


}


 let youTube = new YouTube("123455","6788999");
 
 let title = youTube.getVideoTitle("oPbeX1LXGsg")
 console.log(title);
 
 let likes = youTube.getVideolikes("oPbeX1LXGsg")
 console.log("total likes count-" +likes);
 
 let recentvideos=youTube.getRecentlyFeaturedVideo();
  console.log(recentvideos);
  
 let fullEntry=youTube.getVideoEntry("oPbeX1LXGsg");
 console.log(fullEntry);
 
 let top_video=youTube.getTopRatedVideo();

let get_most_subs=youTube.getMostSubscribers();