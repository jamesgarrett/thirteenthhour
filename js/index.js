var counter = 0;

// when we rotate we are always translating Z -50vw
// if we are on home the Y rotation is 0
// if we are on about the Y rotation is 90
// if we are on releases the Y rotation is 180
// if we are on events the Y rotation is 270

$('.next').on('click', function(){
  counter -= 90;
  var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
  $('#cube').css('transform', rotation);
});
$('.previous').on('click', function(){
  counter += 90;
  var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
  $('#cube').css('transform', rotation);
});

$('#home').on('click', function(){
	console.log(counter)
	switch(counter) {
	    case 0:
	        break;
	    case 90:
	        counter -= 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 180:
	        counter += 180;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 270:
	        counter += 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 360:
	    	counter = 0;
	    	break;
	}
  
});

$('#about').on('click', function(){
	console.log(counter)
	switch(counter) {
	    case 0:
	        counter += 270;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 90:
	        counter += 180;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 180:
	    	counter += 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 270:
	    	break;
	    case 360:
	    	counter -= 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	    	break
	}

});

$('#releases').on('click', function(){
	console.log(counter)
	switch(counter) {
	    case 0:
	        counter += 180;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 90:
	        counter += 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 180:
	    	break;
	    case 270:
	        counter -= 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 360:
	    	counter -= 180;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	    	break
	}
  
});

$('#events').on('click', function(){
	console.log(counter)
	switch(counter) {
	    case 0:
	        counter += 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 90:
	        break;
	    case 180:
	        counter -= 90;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 270:
	        counter -= 180;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	        break;
	    case 360:
	    	counter -= 270;
			var rotation = 'translateZ( -50vw ) rotateY( ' + counter + 'deg )';
			$('#cube').css('transform', rotation);
	    	break
	}
  
});