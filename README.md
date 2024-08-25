<img src='.github/assets/logo.svg' width='80'>

### Challenge 02 - Configuração de Ambiente com Docker Compose

#### 💻 Getting started
Docker is a requirement to run this project.
https://docs.docker.com/engine/install/

With this step done, you can clone the project.
```bash
$ git clone https://github.com/wladimirgrf/02-devops-containers-challenge.git 
$ cd 02-devops-containers-challenge
```

And set up the environment variables.
```bash
# Make a copy of '.env.example'
# Fill it with your environment variables
$ cp .env.example .env
```

Now launch the containers.
```bash
$ docker compose up -d
```

The application will be available on port `3001`. However, there is still one last manual step to be done. You need to run the migrations (_in this project this process is not yet automated_).
```bash
$ npm run db:migrate
```

#### 🔗 Challenge link
https://efficient-sloth-d85.notion.site/Desafio-Configura-o-de-Ambiente-com-Docker-Compose-486107762a0042c99a3bf7d3ecc14e85