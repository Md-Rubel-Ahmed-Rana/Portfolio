import mongoose from "mongoose";
import { colors } from "../utils/colorCode";

export const connectDb = async () => {
  console.log(`${colors.green}🔗 Connecting to the database...${colors.reset}`);
  try {
    await mongoose.connect(process.env.DATABASE_URL as string, {
      socketTimeoutMS: 1000,
    });
    console.log(
      `${colors.green}🎉 Database connection successful!${colors.reset}`
    );
  } catch (error: any) {
    console.error(
      `${colors.red}❌ There was an error connecting to the database: ${error.message}${colors.reset}`
    );
  }
};

export const disconnectDb = async () => {
  try {
    await mongoose.disconnect();
    console.log(`${colors.blue}🔌 Disconnected from database.${colors.reset}`);
  } catch (error: any) {
    console.error(
      `${colors.red}❌ Error disconnecting from the database: ${error.message}${colors.reset}`
    );
  }
};

export const reconnectDb = async () => {
  try {
    await mongoose.disconnect();
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log(`${colors.yellow}🔄 Reconnected to database.${colors.reset}`);
  } catch (error: any) {
    console.error(
      `${colors.red}❌ Error reconnecting to the database: ${error.message}${colors.reset}`
    );
  }
};
