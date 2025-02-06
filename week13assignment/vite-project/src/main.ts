$(document).ready(function () {
  // Base URL for the API
  const BASE_URL = "http://localhost:4000";
  const FUNKO_LIST_SELECTOR = "#funkoList";
  const NEW_FUNKO_INPUT_SELECTOR = "#newfunko";
  const NEW_FUNKO_NUMBER_INPUT_SELECTOR = "#newFunkoNumber";
  const ADD_FUNKO_BUTTON_SELECTOR = "#addFunko";

  // Fetch all funkos
  const fetchFunkos = () => {
      return fetch(`${BASE_URL}/funkos`)
          .then(response => response.json())
          .catch(error => console.error("Error fetching funkos:", error));
  }

  // Add a new funko
  const addFunko = (text, number) => {
      return fetch(`${BASE_URL}/funkos`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, number, acquired: false }),
      })
      .then(response => response.json())
      .catch(error => console.error("Error adding funko:", error));
  }

  // Delete a funko
  const deleteFunko = (id) => {
      return fetch(`${BASE_URL}/funkos/${id}`, {
          method: "DELETE",
      })
      .then(() => render())
      .catch(error => console.error("Error deleting funko:", error));
  }

  // Toggle acquired status
  const toggleFunko = (id) => {
      return fetch(`${BASE_URL}/funkos/${id}`)
          .then(response => response.json())
          .then(funko => {
              return fetch(`${BASE_URL}/funkos/${id}`, {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ ...funko, acquired: !funko.acquired }),
              });
          })
          .then(() => render())
          .catch(error => console.error("Error toggling funko status:", error));
  }

  // Edit a funko
  const editFunko = (id, funko) => {
      return fetch(`${BASE_URL}/funkos/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(funko),
      })
      .then(() => render())
      .catch(error => console.error("Error editing funko:", error));
  }

  // Render funkos to the UI
  const render = () => {
      fetchFunkos().then(funkos => {
          $(FUNKO_LIST_SELECTOR).empty(); // Clear existing list

          funkos.forEach(funko => {
              const funkoItem = `
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span class="funko-text ${funko.acquired ? "acquired" : ""}">${funko.text} (# ${funko.number})</span>
                      <div>
                          <button class="btn btn-sm btn-secondary editfunko" data-index="${funko.id}">Edit</button>
                          <button class="btn btn-sm btn-success togglefunko" data-index="${funko.id}">${funko.acquired ? "Acquired" : "Not yet Acquired"}</button>
                          <button class="btn btn-sm btn-danger deletefunko" data-index="${funko.id}">Delete</button>
                      </div>
                  </li>`;
              $(FUNKO_LIST_SELECTOR).append(funkoItem); // Add new funko item
          });
      });
  }

  // Call render on page load
  render();

  // Event listener for adding a funko
  $(ADD_FUNKO_BUTTON_SELECTOR).click(function (event) {
      event.preventDefault(); // Prevent form submission

      const text = $(NEW_FUNKO_INPUT_SELECTOR).val().trim(); // Get funko name
      const number = $(NEW_FUNKO_NUMBER_INPUT_SELECTOR).val().trim(); // Get funko number

      if (!text || !number) {
          alert("Please enter both Funko name and number");
          return; // Stop if validation fails
      }

      addFunko(text, number).then(() => {
          $(NEW_FUNKO_INPUT_SELECTOR).val(""); // Clear input
          $(NEW_FUNKO_NUMBER_INPUT_SELECTOR).val(""); // Clear input
      });
  });

  // Event listener for deleting a funko
  $(document).on("click", ".deletefunko", function () {
      const id = $(this).data("index"); // Get funko ID
      deleteFunko(id);
  });

  // Event listener for toggling acquired status
  $(document).on("click", ".togglefunko", function () {
      const id = $(this).data("index"); // Get funko ID
      toggleFunko(id);
  });

  // Event listener for editing a funko
  $(document).on("click", ".editfunko", function () {
      const id = $(this).data("index"); // Get funko ID
      fetch(`${BASE_URL}/funkos/${id}`)
          .then(response => response.json())
          .then(funko => {
              const newText = prompt("Edit your Funko name:", funko.text);
              const newNumber = prompt("Edit your Funko number:", funko.number);

              if (newText !== null && newNumber !== null) {
                  editFunko(id, { text: newText, number: newNumber, acquired: funko.acquired });
              }
          })
          .catch(error => console.error("Error fetching funko:", error));
  });
});