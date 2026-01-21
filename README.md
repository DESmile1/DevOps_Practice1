# My First DevOps Journey: Node.js + Redis Stack

Hello! This is my first full-fledged project, in which I moved from simply writing code to building a real infrastructure. 

I live in Varna (at least my server does!), and this project helped me figure out how to make different parts of the application work as a single mechanism.

##  What's inside?

This is a microservice application that can count visitors. But the most important thing here is not the code, but how it is deployed:

* **Node.js (Express):** My main application that greets visitors.
* **Redis:** A fast in-memory database that stores the number of visits.
* **Docker:** I packaged everything into isolated containers so that the project would work the same on my computer and on the server in Bulgaria.
* **Docker Compose:** The project's “conductor.” With a single command, it sets up the network, configures connections between the code and the database, and forwards ports.

##  What I learned from this project

For me, it wasn't just a matter of “copy and paste.” I went through:
1.  **Linux (Ubuntu/WSL) configuration:** Working with access rights, daemons, and repositories.
2.  **YAML optimization:** I understood the difference between `build` and `image`, learned how to manage the build context, and set up launch queues using `depends_on`.
3.  **Externalized Configuration:** I didn't hardcode the greeting text into the code, but moved it to environment variables. Now I can change the site language without rebuilding the Docker image.
4.  **Git Flow:** Setting up SSH/Tokens and working with branches.

##  How to run

If you have Docker installed, you only need one command:

```bash
docker-compose up --build -d
