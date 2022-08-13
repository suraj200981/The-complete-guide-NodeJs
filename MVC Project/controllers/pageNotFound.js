//contains logic for when users visits a page that doesn't exist (404)

exports.error404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found - 404" });
};
