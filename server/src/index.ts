import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path'; // Import the 'path' module

// --- THIS IS THE FIX ---
// Configure dotenv to look for the .env file in the PARENT directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// --- END FIX ---


// --- CRITICAL: LOAD SECRETS ---
// These keys are now loaded securely on the server and are NEVER exposed to the frontend.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in .env file. Make sure it is in your .env file in the project root.");
}
if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in .env file (add a long, random string)");
}

// --- MOCK DATABASE DATA (Replace this with a real DB later) ---
const MOCK_USERS = {
  'customer@local.com': { id: 'user123', password: '123', name: 'Jane', role: 'Customer' },
  'shop@local.com': { id: 'shop456', password: '123', name: 'James', role: 'ShopOwner' },
};

const MOCK_PRODUCTS = [
  { id: 1, name: "Trail Runner Shoes", shopName: "Footwear Locker", price: "$89.99", rating: 4.8, distance: "0.8 miles away", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ31WeTVPHltKCBT8TjsLNnByTIbI9-vKq0eUXkLD6H0D1exnzQOcftMyd5eejjZVvm2qcKLRUvqPsTFgL6cIGPTVGhn-JIdTecQf4Cw0WGO4D9Zbvzy3K9lQNvG3oZZxJHOa5a2T_uDFSgEhWpA_UQ30szuCvpbqRy7_u3NLSrfNV3_SW3yY1admTQkX3s3nKWTrtcg0imPre5lp8lKRpWi984WDKwGGgvxwfZTi3mSX1d0wlWHeSkBbW_UaR9HlV5X0i58DR_Ok", isFavorite: false },
  { id: 2, name: "Classic Chronograph", shopName: "The Watch Shop", price: "$249.00", rating: 4.9, distance: "1.2 miles away", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiLijYMKW0DAzzXQIKppmRsIj7WESWJjST8aG2I1DONPTr8bS7RJt8QT_HF4A0l2sG2O0rUwp6Gd63iddjC-GsTkFjGUOJd9O0V6CtxvkuOfslHWnFqk1sX8QzqlN37KkyyCAec1oqn16QcBktezdLZwRkUkBpSXBBTKOE_A9pLrwNkdgszxpV6TF879xBFz9B75e8vGGVtSGR7CHodIjmKCClzFiqiEG-8fQe6zgu_0QQnbPB0QooS8TwUeaRGWOTfr9IEbxDpQw", isFavorite: false },
  { id: 3, name: "Aviator Sunglasses", shopName: "Sun Spot", price: "$120.50", rating: 4.7, distance: "0.5 miles away", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaxtgdL3DVjp-fm66LDuDyjXJYP_N0ZeaNj6wXn2TrwUzvVvQiSqL1YqWH8shKBGR7At-YF4qWQEa7zYKC3nYojC3b2lzu3wYPu-creZsrikVdbVgDqQloUMnjKzE9uIcUrKo51r0tNy9tBNzuJS-QMR45eSAAm0gxYchDbcavZehyq1eDHzcaoT2HdL0KY1yXzqPhMAC7HocXWR8WFrYpE0-NMA3d9lwONjelymQSS1SiEg57q7LtVeK-NQHzW3_CrC796eVKwls", isFavorite: true },
  { id: 4, name: "Noise-Cancelling Headphones", shopName: "AudioPhile", price: "$199.99", rating: 5.0, distance: "2.1 miles away", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlTsDfu3MDgIwLCpFrAf8clbIX8OzCLFNEbU8Rx7LBh_BRD2dmSZfRHmM1K38Uk9qMYekQZhTIM690xFesDsbVgGgvHEkvD2e8UZ0PTvdqq_7_9VAKhY_XgGYwBn_wtYQ80xKT60RcUXWc7M_RbFqnHZCoWiEQuURVtUZwubppYp7smTud29sL6WBjNZwgUY9oqjnrGk5IJBlsGa1IVjJxDNjHUFqt-oRNedpfww_arAD9cRa6ePtLnm5seX6IJGOuQeG1N-cSZ_o", isFavorite: false },
];

const MOCK_ACTIVITIES = [
  { event: "New order #1234 received", user: "Maria Garcia", date: "2 min ago", status: "Processing" },
  { event: "Customer left a 5-star review", user: "John Doe", date: "1 hour ago", status: "Completed" },
  { event: "Product \"Artisan Coffee Beans\" is low on stock", user: "System", date: "3 hours ago", status: "Warning" },
  { event: "New customer message received", user: "Emily White", date: "Yesterday", status: "Action Required" }
];

// --- INITIALIZE APP & GEMINI ---
const app = express();
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- MIDDLEWARE ---
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your React app
app.use(express.json()); // Parse JSON request bodies

// --- AUTHENTICATION API ---
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;

  // @ts-ignore
  const user = MOCK_USERS[email];

  if (user && user.password === password && user.role === role) {
    // User is valid, create a JWT
    const token = jwt.sign(
      { id: user.id, name: user.name, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );
    
    // Send back the user info and the token
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: email,
        role: user.role,
      },
      token: token,
    });
  } else {
    // Invalid credentials
    res.status(401).json({ message: 'Invalid email or password.' });
  }
});

// --- DATA API ---
app.get('/api/products', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json(MOCK_PRODUCTS);
  }, 1500);
});

app.get('/api/shop/activity', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json(MOCK_ACTIVITIES);
  }, 1000);
});

// --- SECURE AI API ---
app.post('/api/ai/generate-description', async (req, res) => {
  const { productName } = req.body;

  if (!productName) {
    return res.status(400).json({ message: 'Product name is required' });
  }

  try {
    const prompt = `Generate a compelling, one-paragraph product description for: ${productName}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ description: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ message: "Error generating description from AI." });
  }
});

// --- START SERVER ---
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running perfectly on http://localhost:${PORT}`);
});