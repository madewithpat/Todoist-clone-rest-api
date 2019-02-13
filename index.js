const app = require("./modules/app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Api running on port ${PORT}`));
