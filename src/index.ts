import type { UserProfile } from "./types.js";

const generatedKey = generateKey();

const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

const users = await getUsers(url , generatedKey);

logUsers(users);


//Function to abstract users
function logUsers(users : UserProfile[]){
    for (const user of users){
        console.log(`User name : ${user.user.name}, Role : ${user.role} , experience : ${user.experience} , Remote : ${user.remote}`);
    }
}


//Function to get the Users
async function getUsers(url : string , apiKey : string): Promise<UserProfile[]> {
    const response = await fetch(url, {
        method : "GET", 
        mode : "cors", 
        headers : {
            "X-API-Key" : apiKey, 
            "Content-Type" : "application/json"
        }
    });

    return response.json();
}

//To generate random strings
function generateKey(): string {
    const options = "ABCDEF0123456789";
    let token = ""; 
    for (let i = 0 ; i < 20 ; i ++){
        token += options.charAt(Math.floor(Math.random() * options.length));
    }
    return token;
}