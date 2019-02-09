$(function () {



  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");

        location.reload();
      }
    );
  });


  $(".change-devour").on("click", function (event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevour");

    let newDevourState = {
      devoured: newDevour
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour status to", newDevour);
        location.reload();
      }
    );
  });


});
