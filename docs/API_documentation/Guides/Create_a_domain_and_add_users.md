# How to create a domain and add users

**Prerequisites:** 

- Enterprise account with permission to create domains

**Endpoints used:**

- `POST /domains`
- `POST /users`




### Step 1: Create a domain

To create a domain, send a `POST` request to the endpoint `/domains`. Customize the data in the request body with the necessary parameters for creating a domain: the domain identity and description. Domain identity consists of the root domain name followed by any number of sub-domain names, and must start and end with ”/”, for example: “/sub_domain1/sub_domain2/”. The following is an example of the request:

=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"id":"/sub_domain1/sub_domain2/","description":"Example domain"}' \
    https://#HOSTNAME/api/coiotedm/v3/domains
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.domains import Domain

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    domain = Domain(
        id="/sub_domain1/sub_domain2/",
        description="Example domain"
    )
    print(
        client.domains.add_domain(domain)
    )

    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.

### Step 2: Add users to your domain

To add users, send a `POST` request to the endpoint `/users`. Specify your domain in the path parameter. In the request body provide a user object. You have to include the following information:

- login - user's login
- email - user's email
- emailVerified - set true to create a user with already verified email
- domain - user's domain
- password - user's password
- roles - user's roles, leave empty if not willing to add any
- permissions - user's permissions, leave empty if not willing to add any
- tosAccepted - set true to create a user with already accepted Terms of Service

The following is an example of the request:

=== "cURL"

    ```
    curl -X POST \
    -H "Authorization: Bearer #TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"login":"example_user","email":"exampleUser@email.com","emailVerified":true,"domain":"/sub_domain1/sub_domain2/","password":"example_password","roles":["string"],"permissions":["string"],"tosAccepted":true"}' \
    https://#HOSTNAME/api/coiotedm/v3/users
    ```

=== "Coiote Python"

    ``` python
    from coiote.client import Coiote
    from coiote.v3.model.users import UserCreateRequest

    coiote_auth = "#TOKEN"
    client = Coiote(
        url="https://#HOSTNAME",
        auth=coiote_auth
    )
    user = UserCreateRequest(
        login="example_user",
        email="exampleUser@email.com",
        emailVerified=True,
        password="example_password",
        roles=["string"],
        permissions=["string"],
        tosAccepted=True,
        domain="/sub_domain1/sub_domain2/"
    )

    print(
        client.users.create_one(user).json()
    )

    ```

Replace `#TOKEN` with your actual access token and `#HOSTNAME` with your actual hostname.