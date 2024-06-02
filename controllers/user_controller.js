const handleUserShignInPage = (req, res) => {
    return res.render("sighin");
}

const handleUserShignUpPage = (req, res) => {
    return res.render("sighup");
}

module.exports = {
    handleUserShignInPage,
    handleUserShignUpPage,
}