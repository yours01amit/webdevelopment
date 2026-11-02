async function getTodos() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) {
            throw new Error(`Error status ${response.status}`);
        }

        const todos = await response.json();

        const get_title = todos
            .slice(0, 10)
            .map(e => e.title);

        const container = document.querySelector("#todo-container");

        get_title.forEach((title) => {
            container.innerHTML += `<p>${title}</p>`;
        });

    } catch (error) {
        console.log(error.message);
    }
}

getTodos();