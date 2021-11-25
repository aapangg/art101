/*
 * AUTHOR: ANITA PANG <APANG6@UCSC.EDU>
 * CREATED: 8 NOVEMBER, 2021
 * LICENSE: PUBLIC DOMAIN
 */

 $("#challenge").append("<button id='c-button'>Button</button>");
 $("#problem").append("<button id='p-button'>Button</button>");
 $("#results").append("<button id='r-button'>Button</button>");

 $("#c-button").click(function(){
   $(this).parent().toggleClass("after-click");
 })

 $("#p-button").click(function(){
   $(this).parent().toggleClass("after-click");
 })

 $("#r-button").click(function(){
   $(this).parent().toggleClass("after-click");
 })
