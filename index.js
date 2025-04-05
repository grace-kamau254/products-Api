import express from "express";

const app = express();
app.get("/products", (req, res) => {
    res.send("Getting all products");
})
app.get("/products/:productId", (req, res) => {
    res.send(`Getting specific product `);
})
app.post("/products", (req, res) => {
    res.send(`Creating a product `);
})
app.patch("/products/:productId", (req, res) => {
    res.send("updating a product")
})
app.delete("/products/:productId", (req, res) => {
    res.send("deleting a specific product")
})
app.get("/products/on-offer", (req, res) => {
    res.send("Getting product on offer")
})



let port=process.env.PORT || 3000;
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
export default app