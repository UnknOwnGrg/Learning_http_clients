import type { Project } from "./types.js";

//To check the data are right or not
function parseProject(projectString: string): void{
    try {
        const data = JSON.parse(projectString);
        return printProjectObj(data);
    } catch (error) {
        console.log(`Invalid json string`);
    }
}

//It will work as the validation for the parse data
function printProjectObj(parsed: Project){
    console.log(`id : ${parsed.id}`);
    console.log(`completed : ${parsed.completed}`);
    console.log(`title : ${parsed.title}`)
    console.log(`assignees : ${parsed.assignees}`)
}

//Right Data
parseProject(`{
    "complete" : false, 
    "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
    "title" :"Unfidget the widgetP", 
    "assignees": 14
    }`
);

console.log("----");

//Wrong Data
parseProject(`
{
  "completed": false,
  "id":"0f12951e-0a74-4846-a1e0-10b33b13112f"
  "title":"Report quarterly earnings",
  "assignees": 1
}
`);