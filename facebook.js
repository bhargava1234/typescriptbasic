var Facebook = /** @class */ (function () {
    function Facebook(access_token, name, hometown, birthday, email, gender) {
        var _this = this;
        this.getProfileName = function () {
            return _this.name;
        };
        this.getHomeTown = function () {
            return _this.hometown;
        };
        this.getBirthDay = function () {
            return _this.birthday;
        };
        this.getFriendList = function () {
            var friend_list = ["Ramesh", "Suresh", "Rahul", "Pravesh"];
            return _this.friendlist = friend_list;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.access_token = access_token;
        this.name = name;
        this.hometown = hometown;
        this.birthday = birthday;
        this.email = email;
        this.gender = gender;
    } // end constructor
    return Facebook;
}());
var facebook = new Facebook("123sdsdsdsas455", "Ayush Bhargava", "Jaipur,Raj.", "06/08/1989", "ayush.udml@gmail.com", "male");
var fullname = facebook.getProfileName();
console.log("Facebook Name:" + fullname);
var hometown = facebook.getHomeTown();
console.log("Facebook HomeTown:" + hometown);
var birthday = facebook.getBirthDay();
console.log("Facebook Birthday:" + birthday);
var Friends = facebook.getFriendList();
console.log("Friend List");
console.log(Friends);
var getEmail = facebook.getEmail();
console.log("Facebook Email:" + getEmail);
var getGender = facebook.getGender();
console.log(getGender);
