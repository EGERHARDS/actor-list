$(document).ready(function () {
    // Load actors from JSON file
    $.getJSON("actors.json", function (actors) {
      // Generate list of actors
      actors.forEach(function (actor) {
        $(".actor-list").append(`
          <li>
            ${actor.fullname}
          </li>
        `);
      });

      // Show actor info when actor is clicked
      $(".actor-list li").click(function () {
        var index = $(".actor-list li").index(this);
        var actor = actors[index];
        $(".actor-info")
          .html(
            `
          <p>${actor.fullname}</p>
          <p>Appears in: ${actor.movie}</p>
          <button class="close">Close</button>
        `
          )
          .show();
      });

      // Close actor info when close button is clicked
      $(".actor-info").on("click", ".close", function () {
        $(".actor-info").hide();
      });
    });
  });