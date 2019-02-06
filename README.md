# soup-kitchen-backend

# Instructions

All API requests are made to: ***https://soup-kitchen-backend.herokuapp.com***

# MVP

## Register

a **POST** request to */api/staff/register* will create a new user and return an object including an authentication token:

{

    token: 'aKafj1Dg2kLD434So',
    id: 1,
    email: 'jdoe@abc.com', 
    message: 'Registration successful.'

}


the **POST** request must include the following:

- *firstname*
- *lastname*
- *email*
- *password*
- *role*

***note:*** the email must be unique, the database will reject any duplicates. The email functions as a username for that user. 

*Also*, none of the input fields can contain spaces. The database will send back an error if so.

## Login

a **POST** request to */api/staff/login* will login the user and return an object with an authentication token:

{

    token: 'aKafj1Dg2kLD434So',
    id: 1,
    email: 'jdoe@abc.com',
    message: 'User logged in successfully.'

}

the **POST** request must include the following:

- *email*
- *password*


## Items

a **GET** request to */api/items* will return an object with all items in the inventory:

{

    items:[
        {id: 1, name: 'strawberries', amount: 1, unit: 'lb', imageURL: 'https://i.imgur.com/asfFRe7.jpg', categoryID: 1},
        {id: 2, name: 'blueberries', amount: 20, unit: 'oz', imageURL: 'https://i.imgur.com/https://i.imgur.com/RTZ0qFP.jpgdf.jpg', categoryID: 1},
        {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: 'https://i.imgur.com/GD4FFg.jpg', categoryID: 2},
        {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: 'https://i.imgur.com/afmdagF.jpg', categoryID: 2}
    ],

    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

}    

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **POST** request to */api/items* will return the itemID of the added item:

{

    itemID: 5

}

the **POST** request must include the following:

- *name*
- *amount* (**as an integer**)
- *categoryID* (**as an integer**)
- ( *unit* && *imageURL* are optional )



----------------------------------------------------
a **GET** request to */api/items/:id* will return an object including the item with the associated ID:

{

    item:{
        id: 1,
        name: 'strawberries',
        amount: 1, 
        unit: 'lb',
        imageURL: 'https://i.imgur.com/RTsaFP.jpg',
        categoryID: 1
    },

    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

}    

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **DELETE** request to */api/items/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}

----------------------------------------------------
a **PUT** request to */api/items/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:

- *name*
- *amount* (**as an integer**)
- *categoryID* (**as an integer**)
- ( *unit* && *imageURL* are optional )



# Stretch

## Categories

a **GET** request to */api/categories* will return a list of all the categories:

}

    categories: [
        {
            id: 1,
            name: 'fruits',
            inventory: [
                {id: 1, name: 'strawberries', amount: 1, unit: 'lb', imageURL: 'https://i.imgur.com/ABD0qFP.jpg', categoryID: 1},
                {id: 2, name: 'blueberries', amount: 20, unit: 'oz', imageURL: 'https://i.imgur.com/RDF12Hd.jpg', categoryID: 1},
            ]
        }
        {
            id: 2,
            name: 'vegetables',
            items: [
                {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: 'https://i.imgur.com/RTZ0qFP.jpg', categoryID: 2},
                {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: 'https://i.imgur.com/47fHnED.jpg', categoryID: 2}
            ]
        }
    ],

    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

}

***Note:*** the user must be logged in to view this page. They can have any role.

----------------------------------------------------
a **POST** request to */api/categories* will return the categoryID of the new category:

{

    categoryID: 5

}

the **POST** request must include the following:
- *name*

------------------------------------------------------
a **GET** request to */api/categories/:id* will return an object with the category associated the ID:
{

    category: {
        id: 2,
        name: 'vegetables',
        items: [
            {id: 3, name: 'carrots', amount: 1.5, unit: 'lbs', imageURL: 'https://i.imgur.com/RTZ0qFP.jpg', categoryID: 2},
            {id: 4, name: 'broccoli', amount: 1, unit: 'lb', imageURL: 'https://i.imgur.com/47fHnED.jpg', categoryID: 2}
        ]
    },
    
    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

}

***Note:*** the user must be logged in to view this page. They can have any role.

------------------------------------------------------
a **PUT** request to */api/categories/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:
- *name*

------------------------------------------------------
a **DELETE** request to */api/categories/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}


-------------------------------------------------------
## Staff

a **GET** request to */api/staff* will return a list of all staff members:
{

    staff: [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Smith',
            email: 'jsmith@abc.com',
            role: 'admin'
        },
        {
            id: 2,
            firstname: 'Jane'
            lastname: 'Doe',
            email: 'jdoe@abc.com',
            role: 'staff'
        },
        {
            id: 3,
            firstname: 'Jill',
            lastname: 'Doe',
            email: 'jdoe@abc.com',
            role: 'volunteer'
        }
    ],

    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

} 

***Note:*** the user must be logged in and be an **admin** or **staff** to view this page.

----------------------------------------------------
a **GET** request to */api/staff/:id* will return an object with the staff member associated the ID:
{

    staff: {
        id: 1,
        firstname: 'John'
        lastname: 'Smith',
        email: 'jsmith@abc.com'
    },

    "decodedToken": {
        "email": "faked@abc.com",
        "role": "admin",
        "iat": 1549409409,
        "exp": 1549413009,
        "jti": "12345"
    }

}


***Note:*** the user must be logged in and be an **admin** or **staff** to view this page.

------------------------------------------------------
a **PUT** request to */api/staff/:id* will return an object with a count of 1 if successful:

{

    updatedRecords: 1

}

the **PUT** request must include the following:
- *firstname*
- *lastname*
- *email*
- *role*

------------------------------------------------------
a **DELETE** request to */api/staff/:id* will return an object with a count of 1 if successful:

{

    deletedRecords: 1

}

------------------------------------------------------

***Note:*** Errors will come back in one of two formats 

- ex. 1: Missing input on login

{

    statusCode: 400,
    message: "Input cannot be blank."
    
}

- ex. 2: Email used to register already exists in database

{

 message: "insert into `users` (`email`, `firstname`, `lastname`, `password`, `role`) values ('fake@abc.com', 'a', 'b', '$2a$12$dH5D9FnZlHsVpmf1jqno1u/XBL3KF3pkhwFJmGfTYrqj9lpu1f/0e', 'admin') - SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email"

}