
//Final project page javascript

$(document).ready(function() {

$( "#accordion" ).accordion();

var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});

$( "#button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabs" ).tabs();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

$( "#datepicker" ).datepicker({
	inline: true
});



$( "#progressbar" ).progressbar({
	value: 20
});

$( "#spinner" ).spinner();

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#selectmenu" ).selectmenu();


$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);	

$.validator.setDefaults({
			
			submitHandler: function() {
				//scrape for data
				var VC = $('#vc').val();
				var Name1 = $('#name1').val();					
				var Name2 = $('#name2').val();	
				var Name3= $('#name3').val();	
				var Age= $('#age').val();
				var Candidates = "";	
				
				
			//	var Phone = $('#phone').val();						
			//	var Email = $('#email').val();					
			//	var userName = $('#username').val();	
			//	var Password = $('#password').val();	
														
						
			
				$('input[name="candidate"]:checked').each(function() {		
					Candidates += $(this).val() + " ";
				});
			
				
				//display to output
				$('#pageContent').append("<br><br>Name: " + Name1 + " " + Name2+ " " + Name3)
						 .append("<br> Age: " + Age)
						 .append("<br> Voting Center ID: " + VC)
						 .append("<br> Candidate Vote: " + Candidates)
						.append("<br> Password: " + Password)
						 .append("<br> Phone: " + Phone)
						.append("<br> Email: " + Email)
						 .append("<br> Username: " + userName);
		
			
			},
			
		errorPlacement: function (error, element) {
				
					error.insertAfter(element);
			} 
			

			
		});//end validator
$("#basicForm").validate({          //begin rules   
			rules: {
				vc: { 
					required: true,
					maxlength: 15
				},
				name1: {							
					required: true,
					maxlength: 10
				},
				name2: {							
					required: true,
					maxlength: 10
				},
				name3: {					
					required: true,
					maxlength: 10
				},
				age: {
					required: true,
					number: true,
					min: 18
				},
		
				phone: {							
					required: true,
					digits: true,
					maxlength: 10
				},
				email: {							
					required: true,
					email: true
				},
				username: {						
					required: true,
					maxlength: 10
				},
				password: {							
					required: true,
					minlength: 5
				},
				
			},
			 //end rules
			                             
				messages: {           //being messages   
				vc: {
					required: "Please enter a valid Voting Center ID",
					maxlength: $.validator.format("Must not have more than {0} characters")
				},
				name1: {							
					required: "Please enter a first name",
					maxlength: $.validator.format("Must not have more than {0} characters")
				},
				name2: {							
					required: "Please enter a middle name",
					maxlength: $.validator.format("Must not have more than {0} characters")
				},
				name3: {							
					required: "Please enter a last name",
					maxlength: $.validator.format("Must not have more than {0} characters")
				},
				age: {
					required: "Please enter your age",
					digits: "Please enter a valid age",
					min: $.validator.format("Must be 18 years or older to register")
				},
				
				phone: {							
    	  	                 	    required: "Please enter a phone number",
					digits: "Please enter digits only",
					maxlength: 10
				},
				email: {							
					required: "Please enter an email address",
					email: "Please enter a valid email address"
				},
				username: {						
					required: "Please provide a user name",
					minlength: $.validator.format("Must have at least {0} characters")
				},
				password: {						
					required: "Please provide a password",
					minlength: $.validator.format("Must have at least {0} characters")
				}
                        },	
			//end messages
				
}); //end validation
				
}); //end document ready
