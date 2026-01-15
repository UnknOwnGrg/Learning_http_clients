const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/projects";
const apiKey = generateKey();
const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
    }
});
const responseData = await response.json();
logProjects(responseData);
function generateKey() {
    const characters = "ABCDEF0123456789";
    let token = "";
    for (let i = 0; i < 20; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}
function logProjects(projects) {
    for (const project of projects) {
        console.log(`Project : ${project.title}, Completed : ${project.completed}`);
    }
}
export {};
//# sourceMappingURL=URIS.js.map