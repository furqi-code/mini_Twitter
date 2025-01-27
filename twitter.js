var str = "" ;

// to disable/enable the Tweet button based on Characters
$(".note").on("keypress", function(){
    str = $(".note").val() ;
    if(str.length > 37) 
    {
        $(".tweetBtn").attr("disabled", true) ;
        // alert("Exceeded character limit") ;   // optional
    }else{
        $(".tweetBtn").removeAttr("disabled") ;
    }   
})

$(".tweetBtn").on("click", function(){
    $(".post").val(str) ;
    // $(".note").val("") ;     // optional
    str = "" ;
})

$(".clearr").on("click", function(){
    str = "" ;
    $(".note, .post").val("") ;
    $(".tweetBtn").removeAttr("disabled") ;
})

// to print limited tweet based on characters
$(".limit").on("click", function(){
    let limitedStr = str ;
    if(str.length > 17)
        limitedStr = str.slice(0,17) ;
    $(".post").val(limitedStr) ; 
    // $(".note").val("") ;    // optional
    str = "" ;
})

// to print limited tweet based on Words
// $(".limit").on("click", function(){
//     let limitedStr = str ;
//     let cntWord = 0 ;
//     for(let i=0 ; i<str.length ; i++)
//     {
//         if(str[i] == " " || str[i] == '.' || str[i] == ",")
//             cntWord++ ;
//         if((str[i] == '.' || str[i] == ',') && str[i+1] == " ")
//             i = i+2 ;
//         if(cntWord == 7)
//         {
//             limitedStr = str.slice(0, i+1) ;
//             break ;
//         }
//     }
//     $(".post").val(limitedStr) ; 
//     // $(".note").val("") ;    // optional
//     str = "" ;
// })