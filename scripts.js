let names = ['Robi', 'Zoli', 'Johi', 'Reka', 'Gabi'];
names.forEach (name => {
    $("ul").append (`<li>${name}</li>`);
});

$("ul > li:last-child").css({fontWeight:'bold'});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append(`<h1> ${additionalBlock.title} </h1>`);
  $('body').append(`<p> ${additionalBlock.text} </p>`);