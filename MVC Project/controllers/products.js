/*This controller contains product logic*/

//global variables
const products = [];

//get add product page
exports.getAddProductPage = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Admin area",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
  });
};

//post add product
exports.postNewProductName = (req, res, next) => {
  //push product to products array
  products.push({ title: req.body.title });

  res.redirect("/"); //redirect to home page
};

//export
exports.products = products;
