
/* import package */
const app = require("./app")

const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)