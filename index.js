const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", require("./src/routes/routes"));

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error:", err);
        return;
    }

    console.log("Running on", PORT);
    
});
