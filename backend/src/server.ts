import mongoose from "mongoose";
import app from "./app";
import { connectDb, disconnectDb, reconnectDb } from "./config/database";
import { colors } from "./utils/colorCode";

const port = process.env.PORT;

// Start the server and connect to the database
const server = app.listen(port, async () => {
  console.log(
    `${colors.green}🚀 The portfolio server is running on port: ${port}${colors.reset}`
  );
  await connectDb();
});

// Gracefully handle server shutdown
process.on("SIGINT", async () => {
  console.log(`${colors.yellow}🛑 Shutting down server...${colors.reset}`);

  // Disconnect from the database before shutting down the server
  await disconnectDb();

  // Close the server
  server.close(() => {
    console.log(`${colors.blue}🔒 Server closed.${colors.reset}`);
    process.exit(0);
  });
});

// Handle database reconnection if needed
// Example: Reconnect when encountering a database connection error
mongoose.connection.on("error", async () => {
  console.error(
    `${colors.red}❌ Database connection error. Reconnecting...${colors.reset}`
  );
  await reconnectDb();
});
