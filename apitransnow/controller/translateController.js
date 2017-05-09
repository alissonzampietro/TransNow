var translate = require("google-translate-api");

var translationController = () => {

  var _getTranslation = (req,res) => {

    var q = req.params.q;
  		translate(q, {from: 'en',to: 'pt'})
        .then(response => {
  			     res.json({"translator":response.text});
  		  }).catch( err => {
  		    console.error(err);
  		  }
      );

  }

  return {
    getTranslation: _getTranslation
  }



}

module.exports = translationController();
