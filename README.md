# pcshop
None

### Client-Server API

Server serves content in folder 'public' as static content.

#### REST API

POST /submit - Submit contact details:
    {
REQUIRED    name: string 
REQUIRED    phone: string
            email: string
REQUIRED    description: string
    }