React router
1-->
when we first hit /create in url we get the massage on screen that 'cannotGet/create' 
because browser was trying to hit this page on server and that page did'nt exist.so,its not actually
using client side of routing.
it was using the server side routing for that first page load(Reason==>First time we visit our application the browser neeeds
to grab the initial HTML and load the javascript before itr can do anything, before the react roter even runs) 

Solution-->in order to clear the problem we have to change the dev server setting in web server configuraion file
(we have to make sure that in each and every time when screen renders only index.html page is shown by default
and let react router  decide what is to be shown  according to different  route request)

change-->
 historyApiFallback:true

 2-->
 Linking between routes
 The whole point of client side routing  is we get different conents on same page without making HTTP request to server
 (without refreshing whole page)
 So,In case of <a> tag in order to link the page,when we click on link browser makes a Http request to server 
 for changing the page
 so, we use LINK poperty of react for llinking different page
import Link from react-router-dom