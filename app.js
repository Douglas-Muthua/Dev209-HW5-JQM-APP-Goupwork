// $(document).ready(function(){
 
//   });



  let songlist = [];

  function pushData(){
    let view = document.getElementById("view");
	let newTd = document.createElement("li");
	var inputText = document.getElementById("songInput").value;
    var inputArtist = document.getElementById("artistInput").value;
    var inputRate = document.getElementById("rateInput").value;
	var node = document.createTextNode("Song: " + inputText + ", By: " + inputArtist +", Rating : "+ inputRate);
	newTd.appendChild(node);
	view.appendChild(newTd);

    $('.tab-link').click(function(){
        var targetTab = $(this).attr('data-target');
        // $('.tab-content').hide();
        // $(targetTab).show();
      });
  
      $('#songSubmit').click(function(){
        var song = $('#songInput').val();
        $('#songOutput').text(song);
      });
  
      $('#artistSubmit').click(function(){
        var artist = $('#artistInput').val();
        $('#artistOutput').text(artist);
      });
  
      $('#rateSubmit').click(function(){
        var rating = $('#rateInput').val();
        $('#rateOutput').text(rating);
      });


  }