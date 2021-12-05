function bring_in_my_data() {
  // var square_x1y4 = {"background":"blue", "text_color":"pink", "number_of_clicks":5};  // for debugging
  // var square_x2y3 = {"background":"pink", "text_color":"purple", "number_of_clicks":5};  // for debugging
  
  for (let iteration = 0; iteration < localStorage.length; iteration++) {

    // var each_square_identifier = localStorage.key(iteration)
    // var local_storage_JSON = localStorage.getItem(each_square_identifier);  //code consolidated into below line
    let local_storage_JSON = localStorage.getItem(localStorage.key(iteration))

    if (local_storage_JSON !== null) {          
      var parsed_data = JSON.parse(local_storage_JSON);
      console.log ("Iteration " + iteration + " Cleared")
   
    } else {
       console.log("Ooops! Web Storage is not supported !");
  }

  let each_square_identifier = localStorage.key(iteration)

  let my_square_grab = document.getElementById(each_square_identifier);

    my_square_grab.style.backgroundColor = parsed_data["background"];      
    my_square_grab.style.color=parsed_data["text_color"];
    my_square_grab.innerHTML = (parsed_data["number_of_clicks"]);

    // console.log("Iteration " + iteration + " is the square key => " + each_square_identifier); // for debugging
    // console.log("BKGROUND " + parsed_data["background"] + " & NUMBER IS " + parsed_data["number_of_clicks"]);  // for debugging 
  }  
}   


function colour_change(clicked_id) {

  // a try and catch is appropriate in case data has not yet been assigned
  try {
     var my_value = (JSON.parse(localStorage.getItem(clicked_id)))["background"]
  } catch (error) {
    my_value == null
  }

  console.log("New data entered for " + clicked_id)

  if (my_value == null) {
    var new_colour_value = "white";
    var new_font_colour = "black";
  }
  else if (my_value == "black") {
    var new_colour_value = "white";
    var new_font_colour = "black";
 
  }else{
    var new_colour_value = "black";
    var new_font_colour = "white";
  };

  try {
    if ((JSON.parse(localStorage.getItem(clicked_id)))["number_of_clicks"] == 9) {
      var new_colour_value = "rebeccapurple";
      }
  } catch (error_2) {
    new_colour_value = new_colour_value;
  }
 

  // localStorage.setItem(clicked_id,new_colour_value);

  var my_square_grab = document.getElementById(clicked_id);
  my_square_grab.style.backgroundColor=new_colour_value;
  my_square_grab.style.color=new_font_colour;

  my_square_grab.style.transitionDuration="1s";
  var current_number = my_square_grab.innerHTML;
  var new_number = parseInt(current_number) + 1;
  my_square_grab.innerHTML = new_number;

  square_properties = 
    {"background":new_colour_value,
    "text_color":new_font_colour,
    "number_of_clicks":new_number};

  square_properties_JSONstring = JSON.stringify(square_properties);
  localStorage.setItem(clicked_id,square_properties_JSONstring);
}


function reset_all() {
  localStorage.clear();
  // there is also the option to clean specific data, such as using the localStorage.removeItem("key")
  // information could also be modified by overwriting the values using the same keys

  let grab_squares = document.getElementsByClassName("squares");
 
  for (let class_iteration = 0; class_iteration < grab_squares.length; class_iteration++) {
    grab_squares[class_iteration].style.transitionDuration="1s";
    grab_squares[class_iteration].style.backgroundColor = "black";    
    grab_squares[class_iteration].style.color = "white";
    grab_squares[class_iteration].innerHTML = 0;  
  }
}