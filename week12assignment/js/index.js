$(document).ready(function () {
    // Base URL for the API
    const BASE_URL = "http://localhost:4000";
    const FUNKO_LIST_SELECTOR = "#funkoList";
    const NEW_FUNKO_INPUT_SELECTOR = "#newfunko";
    const NEW_FUNKO_NUMBER_INPUT_SELECTOR = "#newFunkoNumber";
    const ADD_FUNKO_BUTTON_SELECTOR = "#addFunko";

    // Function to fetch all funkos
    function fetchfunkos() {
        return fetch(BASE_URL + "/funkos")
            .then(response => response.json())
            .catch(error => console.error("Error fetching funkos:", error));
    }

    // Function to add a new funko
    function addFunko(text, number) {
        return fetch(BASE_URL + "/funkos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text, number: number, acquired: false }),
        }).then(response => response.json())
          .catch(error => console.error("Error adding funko:", error));
    }

    // Function to render funkos
    function render() {
        fetchfunkos().then(funkos => {
            $(FUNKO_LIST_SELECTOR).empty(); // Clear existing list

            funkos.forEach(function (funko) {
                let funkoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
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

        const text = $(NEW_FUNKO_INPUT_SELECTOR).val(); // Get funko name
        const number = $(NEW_FUNKO_NUMBER_INPUT_SELECTOR).val(); // Get funko number

        if (text === "" || number === "") {
            alert("Please enter both Funko name and number");
            return; // Stop if validation fails
        }

        addFunko(text, number).then(() => {
            render(); // Re-render list
            $(NEW_FUNKO_INPUT_SELECTOR).val(""); // Clear input
            $(NEW_FUNKO_NUMBER_INPUT_SELECTOR).val(""); // Clear input
        });
    });

    // Event listener for deleting a funko
    $(document).on("click", ".deletefunko", function () {
        const id = $(this).data("index"); // Get funko ID
        fetch(BASE_URL + "/funkos/" + id, {
            method: "DELETE",
        }).then(() => render()) // Re-render after deletion
          .catch(error => console.error("Error deleting funko:", error));
    });

    // Event listener for toggling acquired status
    $(document).on("click", ".togglefunko", function () {
        const id = $(this).data("index"); // Get funko ID
        fetch(BASE_URL + "/funkos/" + id)
            .then(response => response.json())
            .then(funko => {
                fetch(BASE_URL + "/funkos/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...funko, acquired: !funko.acquired }),
                }).then(() => render()) // Re-render after toggling
                  .catch(error => console.error("Error toggling funko status:", error));
            })
            .catch(error => console.error("Error fetching funko:", error));
    });

    // Event listener for editing a funko
    $(document).on("click", ".editfunko", function () {
        const id = $(this).data("index"); // Get funko ID
        fetch(BASE_URL + "/funkos/" + id)
            .then(response => response.json())
            .then(funko => {
                const newText = prompt("Edit your Funko name:", funko.text); // Prompt for new name
                const newNumber = prompt("Edit your Funko number:", funko.number); // Prompt for new number

                if (newText !== null) {
                    fetch(BASE_URL + "/funkos/" + id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ text: newText, number: newNumber, acquired: funko.acquired }),
                    }).then(() => render()) // Re-render after editing
                      .catch(error => console.error("Error editing funko:", error));
                }
            })
            .catch(error => console.error("Error fetching funko:", error));
    });
});