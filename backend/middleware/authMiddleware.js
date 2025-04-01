import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js"; // Ensure this is correctly imported

dotenv.config(); // Load environment variables

// Middleware to protect routes
const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Expecting: Bearer TOKEN

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id, { attributes: { exclude: ["password"] } });
        
        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }
        
        next(); // Continue to the next middleware
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

// Role-based access control middleware
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden: You do not have access" });
    }
    next();
};

export { protect, authorize };
