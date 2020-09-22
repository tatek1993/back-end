# Medical Cabinet Back-End Guide
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

