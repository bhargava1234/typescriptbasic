class Facebook {

    access_token : any;
    name : string;
    hometown: string;
	birthday: any;
	email: any;
	friendlist: string[];
	gender: string;
	 
     constructor (access_token : any, name : string,hometown: string,birthday: any,email: any,gender: string){
       this.access_token = access_token;
	   this.name = name;
	   this.hometown = hometown;
	   this.birthday = birthday;
	   this.email = email;
	   this.gender = gender;
      
    }// end constructor

	
   getProfileName = () => {
	   
	   return this.name;
	   
   }
   
   getHomeTown = () => {
	   
	   return this.hometown;
	   
   }
   
   getBirthDay = () => {
	   
	   return this.birthday;
	   
   }
   
   getFriendList = () => {
	   
	   let friend_list= ["Ramesh","Suresh","Rahul","Pravesh"];
	 
	   return this.friendlist=friend_list;
	   
   }
   
   getEmail = () => {
	   
	  return this.email;
	   
   }
   
    getGender = () => {
	   
	  return this.gender;
	   
   }

}


 let facebook = new Facebook("123sdsdsdsas455","Ayush Bhargava","Jaipur,Raj.","06/08/1989","ayush.udml@gmail.com","male");
 
 let fullname=facebook.getProfileName();
 console.log("Facebook Name:" +fullname);
 
 let hometown=facebook.getHomeTown();
  console.log("Facebook HomeTown:" +hometown);
  
 let birthday=facebook.getBirthDay();
  console.log("Facebook Birthday:" +birthday);
  
 let Friends=facebook.getFriendList();
 console.log("Friend List");
  console.log(Friends);
  
 let getEmail=facebook.getEmail();
  console.log("Facebook Email:" +getEmail);
  
  let getGender=facebook.getGender();
  console.log(getGender); 