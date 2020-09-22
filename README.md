# Medical Cabinet Back-End 

MEMBERS
```
Backend: Tate 
Data Engineering: Mason, Ping
ML Engineering: Tatiana, Keanu

WEB
Jonathan: Front-End  WEB31
Juan: Front-end | WEB 29
Chris: WEB 30
Adrian: Front-End WEB31s
```
---------------
# API Documentation
**See below for more in depth information on each request type / endpoint**

| Feature   |      Method      |  URL |
|:----------|:-------------|:------|
| Login | POST | /api/auth/login |
| Register |    POST   |   /api/auth/register|
| Get Search By ID |GET |    /api/searches/:id |
|List of Past Searches|GET|/api/searches|
|New Search|POST|/api/searches|
|Edit Search|PUT|/api/searches/:id|
|Delete Search|DEL|/api/searches/:id|

-----------------------------------------------

## Register New User POST /api/auth/register

Request Body Example: 
```
{
	"username": "test_username",
	"password": "testing123",
	"over18": true,
	"zipcode": "12345"
}
```
Response Body Example: 
```
{
    "message": "Welcome aboard, testlogin!",
    "id": 1
}
```
-----------------------------------------------
## Login POST /api/auth/login

Request Body Example: 
```
{
	"username": "test_username",
	"password": "testing123",
}
```
Response Body Example: 
```
{
    "message": "Welcome back, testlogin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InRlc3Rsb2dpbiIsImlhdCI6MTU4ODE4NDA3NiwiZXhwIjoxNTg4MTg3Njc2fQ.V_JT1o6XXFFokNxVLyYhMXw_-Ebm5viacqlxxIadXKc"
}
```
-----------------------------------------------
## Get a Treatment Search By ID GET /api/searches/:id
Response Body Example: 
```
{
    "id": 4,
    "user_id": 1,
    "effect": ["Relaxed","Happy"],
    "flavor": ["Citrus", "Spicy"],
    "symptoms": ["Pain", "Stress", "Insomnia"],
    "results": [
        {
            "strain": "Skunkberry",
            "type": "hybrid",
            "rating": 4.5,          
            "effects":  ["Relaxed","Happy","Euphoric","Uplifted","Creative"],
            "flavor": ["Skunk","Berry","Blueberry"],
            "description": "Skunkberry is the odoriferous hybrid...."
        },
        {
            "strain": "Zoom-Pie",
            "type": "indica",
            "rating": 4.6,
            "effects": ["Hungry","Relaxed","Uplifted","Happy","Sleepy"],
            "flavor": ["Berry","Earthy","Pungent"],
            "description": "Zoom Pie (also known as Zombie Pie) is a heavy indica...."
        },    //and so on for all of the other strain results
    ]
}
```
-----------------------------------------------
## Get A List of Past Searches GET /api/searches
Response Body Example: 
```
[
  {
    "id": 1,
    "user_id": 1,
    "effect": ["Relaxed","Happy"],
    "flavor": ["Citrus", "Spicy"],
    "symptoms": ["Pain", "Stress", "Insomnia"],
    "results": [
        {
            "strain": "Skunkberry",
            "type": "hybrid",
            "rating": 4.5,          
            "effects":  ["Relaxed","Happy","Euphoric","Uplifted","Creative"],
            "flavor": ["Skunk","Berry","Blueberry"],
            "description": "Skunkberry is the odoriferous hybrid...."
        }, //and so on for all of the other strain results
    ]
  }, … //and so on for all of the other search results
  
]
```
-----------------------------------------------

## New Treatment Search  POST /api/searches
Request Body Example: 
```
{
        
    "effect": ["Happy", "Creative"],
    "flavor": ["Citrus", "Spicy"],
    "symptoms": ["Pain", "Stress", "Insomnia"],
    "results":[
        " stain name 1",
        " stain name 2",
        " stain name 3",
        " stain name 4",
        " stain name 5"
    ]
}
```
Response Body Example:
```
{
    "message": "Treatment Search was saved successfully",
    "search": {
        "user_id": 1,
        "effect": ["Happy","Creative"],
        "flavor": ["Citrus","Spicy"],
        "symptoms": ["Pain","Stress","Insomnia"],
        "results":["Skunkberry","Zoom-Pie","Jillybean", "Double-Dream","Blucifer"],
        "id": 4 //This is the Treatment Search id
    }
}
```
-----------------------------------------------

## Edit Saved Search PUT /api/searches/:id

Request Body Example:
```
{
    "user_id": 1,
    "effect": ["Tingly", "Aroused"],
    "flavor": ["Minty", "Pine"],
    "symptoms": ["Nausea", "Fatigue", "Headaches"],
    "results": ["Moby-Dick", "Diablo", "Superglue", "Double-Dream", "Blucifer"]
}
```


Response Body Example:
```
{
    "message": "Search successfully updated, good job!",
    "search": {
        "id": 1,
        "user_id": 1,
        "effect": ["Tingly", "Aroused"],
        "flavor": [ "Minty", "Pine" ],
        "symptoms": [ "Nausea", "Fatigue", "Headaches"],
        "results": [
            {
                "strain": "Moby-Dick",
                "type": "sativa",
                "rating": 4.3,
                "effects": [ "Uplifted", "Euphoric", "Happy", "Relaxed", "Energetic"],
                "flavor": ["Sweet", "Citrus","Earthy"],
                "description": "Originating in Amsterdam and currently bred by Dinafem Seeds, Moby Dick’s high THC…"
 			}, {...}, {...}, {...}, {...}
        ]
    }
}
```
-----------------------------------------------

## Delete Search DEL /api/searches/:id

Response Body Example:
```
1 //this is the number of posts deleted
```

------------------------------------------------------------------------------------------------------------------

# Product Vision Document

☝️ Proposal

What problem does your app solve?

    Provides the strain needed based on users’ medical condition.

How does your app solve the problem?

    User is able to look up various strands, anonymously.

    Gives user the dosage, intake method, and intake schedule.

What is the mission statement?

    Provides users with an easy to use resource to make informed decisions about medical cannabis consumption, as an alternative to pharmaceutical drugs.

💡 Features

What features are required for your minimum viable product?
    Use data from a Strain API
    Using machine learning in order to make recommendations
    Ability to save recommendations.
    Ability to create a user (to login).

What features may you wish to put in a future release?
    Make a device app (where applicable)

What do the top 3 similar apps do for their users?
    Leafly - provides a link of conditions, based on link clicked, strain to help with condition.
    Potbotics - more of a personalized cannabis recommendation.


🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?

    React, Redux, Node.js, Knex.js, Keras, Tensorflow, Flask

Do the APIs you need require you to contact them to gain access?
Are you required to pay to use said API(s)?

    No, the app uses a free API

🧮 For Data Scientists

Describe the established data source with at least rough data able to be provided on day one.

    MVP - predict the types of strains someone would want based on their desires. 

    Inputs - symptoms, emotions(happy, relaxed, etc), flavor
    Outputs - strains/types, description 
    Stretch: dosage, intake method
    Find an API that provides us the data we need, in not use the Kaggle dataset with strains, types, and descriptions. 

Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
    Prediction based on customer input
    Show existing Rating 
    Basic visualizations about usage
    Customers that already try - ask for product/strain rating. 

What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
    JSON format


🎯 Target Audience

Who is your target audience? Be specific.

    Individuals who seek an alternative to pharmaceutical drugs for treating their medical conditions.

What feedback have you gotten from potential users?

    Pharmaceutical prices are unaffordable for many, but some are uneasy about using cannabis as an alternative.

Have you validated this problem and your solution with a target audience? Describe how.

    Yes, we have discussed what users are looking for in an app with several people who use prescription cannabis.


🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
    5 days

Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
    Yes, hopefully to have MVP completed by the 29th


