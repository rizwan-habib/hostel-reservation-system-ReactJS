var HostelProfile = (function() {
    var hostelID = "";

    var getHostelID = function() {
      return hostelID;    // Or pull this from cookie/localStorage
    };
  
    var setHostelID = function(name) {
      hostelID = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getHostelID: getHostelID,
      setHostelID: setHostelID
    }
  
  })();
  
  export default HostelProfile;