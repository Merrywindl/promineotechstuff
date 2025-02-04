import "./style.css";
import $ from 'jquery';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"


interface funko {
    id: number;           
    text?: string;        
    number?: number;      
    acquired: boolean;    
}


$(document).ready(function () {
    // Base URL for the API
    const BASE_URL = "http://localhost:4000";

    // Function to get all funkos from the database
    function fetchfunkos() {
        return fetch(BASE_URL + "/funkos")
            .then(response => response.json());
    }

    // Function to get a funko by its ID
    function fetchfunko(id: number) {
        return fetch(BASE_URL + "/funkos/" + id)
            .then(response => response.json());
    }

    // Function to add a new funko
    function addFunko(text: string, number: number) {
        return fetch(BASE_URL + "/funkos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text, number: number, acquired: false }),
        }).then(response => response.json());
    }

    // Function to render the funkos
    function render() {
        fetchfunkos().then(funkos => {
            $("#funkoList").empty(); // Clear the existing list

            funkos.forEach(function (funko: funko) {
                let funkoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="funko-text ${funko.acquired ? "acquired" : ""}">${funko.text} (# ${funko.number})</span>
                    <div>
                        <button class="btn btn-sm btn-secondary editfunko" data-index="${funko.id}">Edit</button>
                        <button class="btn btn-sm btn-success togglefunko" data-index="${funko.id}">${funko.acquired ? "Acquired" : "Not yet Acquired"}</button>
                        <button class="btn btn-sm btn-danger deletefunko" data-index="${funko.id}">Delete</button>
                    </div>
                </li>`;
                $("#funkoList").append(funkoItem); // Add the new funko item to the list
            });
        });
    }

    // Call the render function when the page loads
    render();

    // Event listener for adding a funko
    $("#addFunko").click(function (event) {
        event.preventDefault(); // Prevent the default form submission

        const text = $("#newfunko").val(); // Get the new funko name
        const number = $("#newFunkoNumber").val(); // Get the new funko number

        // Check if both fields are filled
        if (text === "" || number === "") {
            alert("Please enter both Funko name and number");
            return; // Stop the function if validation fails
        }

        // Add the funko to the server
        addFunko(text, number).then(() => {
            render(); // Re-render the list after adding
            $("#newfunko").val(""); // Clear the input fields
            $("#newFunkoNumber").val(""); // Clear the input fields
        });
    });

    // Event listener for deleting a funko
    $(document).on("click", ".deletefunko", function () {
        const id = $(this).data("index"); // Get the id of the funko to delete
        fetch(BASE_URL + "/funkos/" + id, {
            method: "DELETE",
        }).then(() => render()); // Re-render the list after deletion
    });

    // Event listener for toggling acquired status
    $(document).on("click", ".togglefunko", function () {
        const id = $(this).data("index"); // Get the id of the funko
        fetchfunko(id).then(funko => {
            fetch(BASE_URL + "/funkos/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...funko, acquired: !funko.acquired }), // Toggle acquired status
            }).then(() => render()); // Re-render the list after toggling
        });
    });

    // Event listener for editing a funko
    $(document).on("click", ".editfunko", function () {
        const id = $(this).data("index"); // Get the id of the funko
        fetchfunko(id).then(funko => {
            const newText = prompt("Edit your Funko name:", funko.text); // Ask for new name
            const newNumber = prompt("Edit your Funko number:", funko.number); // Ask for new number

            if (newText !== null) {
                fetch(BASE_URL + "/funkos/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text: newText, number: newNumber, acquired: funko.acquired }), // Update the funko
                }).then(() => render()); // Re-render the list after editing
            }
        });
    });
});