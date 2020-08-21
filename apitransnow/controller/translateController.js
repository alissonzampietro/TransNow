const translate = require("translation-google");
const translationController = () => {

  const _getTranslation = (req,res) => {

    const q = req.params.q;
  		translate(q, {from: 'en',to: 'pt'})
        .then(response => {
  			     res.json({"translator":response.text});
  		  }).catch( err => {
  		    console.error(err);
          console.log(res.statusCode);
  		  }
      );
  }

  return {
    getTranslation: _getTranslation
  }

}

module.exports = translationController();
