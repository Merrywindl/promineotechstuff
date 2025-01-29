$(document).ready(function () {
  // Create Base URL variable
  const BASE_URL = "http://localhost:4000";

  

  // Get all funkos from DB
  const fetchfunkos = async () => {
      const response = await fetch(`${BASE_URL}/funkos`);
      const data = await response.json();
      return data;
  };

  // Get a funko by its ID
  const fetchfunko = async (id) => {
      const response = await fetch(`${BASE_URL}/funkos/${id}`);
      const data = await response.json();
      return data;
  };

  // Add a new funko to the server
  const addFunko = async (text, number) => {
      const response = await fetch(`${BASE_URL}/funkos`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, number, acquired: false }),
      });

      const data = await response.json();
      return data;
  };

  

  // Create render function to retrieve data from the server and render it to the page
  const render = async () => {
      const funkos = await fetchfunkos();
      $("#funkoList").empty();

      funkos.forEach(function (funko) {
          let funkoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="funko-text ${funko.acquired ? "acquired" : ""}">${funko.text} (# ${funko.number})</span>
              <div>
                  <button class="btn btn-sm btn-secondary editfunko" data-index="${funko.id}">Edit</button>
                  <button class="btn btn-sm btn-success togglefunko" data-index="${funko.id}">${funko.acquired ? "Aquired" : "Not yet Aquired"}</button>
                  <button class="btn btn-sm btn-danger deletefunko" data-index="${funko.id}">Delete</button>
              </div>
          </li>`;
          $("#funkoList").append(funkoItem);
      });
  };

  // Call the render function when the page loads
  render();

  // Add event listener to the add funko button
  $("#addFunko").click(async (event) => {
      event.preventDefault();
      const text = $("#newfunko").val();
      const number = $("#newFunkoNumber").val(); // Get the number value

      if (!text) {
          alert("Please enter a Funko name");
          return;
      }

      if (!number) {
          alert("Please enter a Funko number");
          return;
      }

      // Add the funko to the server
      try {
          await addFunko(text, number); // Pass both text and number
      } catch (error) {
          console.log(error);
      } finally {
          // Clear the input fields regardless of the outcome
          $("#newfunko").val("");
          $("#newFunkoNumber").val(""); // Clear the number input
      }

      // Re-render the funkos by calling the render function
      render();
  });

  // Add event listener to the delete button
  $(document).on("click", ".deletefunko", async function () {
      const id = $(this).data("index");
      await fetch(`${BASE_URL}/funkos/${id}`, {
          method: "DELETE",
      });
      render();
  });

  // Add event listener to the togglefunko button
  $(document).on("click", ".togglefunko", async function () {
      const id = $(this).data("index");
      const funko = await fetchfunko(id);
      await fetch(`${BASE_URL}/funkos/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...funko, acquired: !funko.acquired }),
      });
      render();
  });

  // Add event listener to the editfunko button
  $(document).on("click", ".editfunko", async function () {
      const id = $(this).data("index");
      const funko = await fetchfunko(id);
      let funkoTextElement = $(this).closest("li").find(".funko-text");
      const newText = prompt("Edit your Funko name:", funko.text);
      const newNumber = prompt("Edit your Funko number:", funko.number);

      if (!newText) {
          return;
      }

      await fetch(`${BASE_URL}/funkos/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...funko, text: newText, number: newNumber }), // Send updated text and number
      });
      render();
  });
});