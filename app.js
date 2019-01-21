function search() {
    // event listener for for submit button (#btn could be wrong)
    $(".search").on("click", function(){
        // drop the attributes into variables
        var keyWord = $("#termSearch").val().trim();
        var records = $("#recordSearch");
        var startDate = $("#startYear" + 0101).val().trim();
        var endDate = $("#endYear" + 1231).val().trim();
        console.log(keyWord);
        // set the api key and url into variables
        var apiKey = "fTWg5DkHzhU8g2nA6VPziPhu2LsGxGkG";
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=" + keyWord + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + apiKey; 
  
    // run our AJAX call to the NYT API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // loop equal to the records wanted
        for (i=0; i<records; i++){
            // grab info from the response variable and set it to variables
            var newDiv = $("<div>");
            var title = response.response.docs[i].headline.main;
            var date = response.response.docs[i].pub_date;
            var author = response.response.docs[i].byline.original;
            var link = response.response.docs[i].web_url;
  
            // append to the div 
            newDiv.append(title, author, date, link);
            console.log(newDiv);
            // append to the DOM ****Don't think we have a results Div yet
            $(".card-header").append(newDiv);
  
        } //end of the loop
        
    }); //end function response
    
    }); //end click function
  }; //end search function

$("reset").on("click", function(event){
    event.preventDefault();
    $('.input-group').innerhtml('');
});
  
  
  
  
  // Below is the code I used to test 
  // var keyWord = "roosevelt";
  // var returns = 5;
  // var startDate = 19990101;
  // var endDate = 20151231;
  
  // var apiKey = "fTWg5DkHzhU8g2nA6VPziPhu2LsGxGkG";
  // var queryURL = "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?&query=" + keyWord + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + apiKey; 
  
  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  // }).then(function(response) {
  //     console.log(response);
  //     var title = response.response.docs[0].headline.main;
  //     console.log(title);
  //     var date = response.response.docs[0].pub_date;
  //     console.log(date);
  //     var author = response.response.docs[0].byline.original;
  //     console.log(author); 
  //     var linkURL = response.response.docs[0].web_url;
  //     console.log(linkURL);
  // });