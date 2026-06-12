require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const {
  resume,
  selfDescription,
  jobDescription,
} = require("./src/services/test");
const generateInterviewReport = require("./src/services/ai.service");
async function main() {
  await connectDB();
}
generateInterviewReport({ resume, selfDescription, jobDescription });
app.listen(3000, () => {
  console.log("Server is running ");
});

main();
