var UserProfile = (function() {
    var userName = "";
    var userHostelID = "";



    var getName = function() {
      return userName;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      userName = name;     
      // Also set this in cookie/localStorage
    };

    var getHostelID = function() {
      return userHostelID;    // Or pull this from cookie/localStorage
    };
  
    var setHostelID = function(hostelID) {
      userHostelID = hostelID;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName,
      getHostelID: getHostelID,
      setHostelID: setHostelID
    }
  
  })();
  
  export default UserProfile;