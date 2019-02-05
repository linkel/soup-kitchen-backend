const multer = require('multer');
const upload = multer({dest: 'assets/public/uploads'})

module.exports ={
    encodeImageFileAsURL: (element) => {
      upload.single(element)
      //   let file = element.files[0];
      //   let reader = new FileReader();
      //   reader.onloadend = function() {
      //     console.log('RESULT', reader.result)
      //   }
      //   reader.readAsDataURL(file);
      // }
      return element
    }
} 