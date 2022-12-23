# GraphQL Project Management System

## GraphQL Queries & Mutations

### Get names of all clients

```
{
  clients {
    name
  }
}
```

### Get a single client name and email

```
{
  client(id: 1) {
    name
    email
  }
}
```

### Get name and status of all projects

```
{
  projects {
    name
    status
  }
}
```

### Get a single project name, description along with the client name and email

```
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```

### Create a new client and return all data

```
mutation {
  addClient(name: "Chukwudi Joshua", email: "chuksjoshuaa@gmail.com", phone: "000-000-000") {
    id
    name
    email
    phone
  }
}
```

### Delete a client and return id

```
mutation {
  deleteClient(id: 1) {
    id
  }
}
```

### Create a new project and return name and description

```

  mutation {
    addProject(name: "Best Footballer", description: "Messi is the most complete player in the world and he has achieved a lot of individual awards;", status: progress, clientId: "636b67c1551f6c310008f0cb"){
      id
      name
      status
      description
      clientId {
        id
      }
    }
  }

```

### Update a project status and return name and status

```
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```
