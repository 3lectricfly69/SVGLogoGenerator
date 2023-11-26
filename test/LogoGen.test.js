
const shape = new generateSVG(); 
shape.setTextInput("C 0 N T 1 N U E");
shape.setTextColor("#0c0");
shape.setLogoShape('circle');
shape.setLogoColor('#000');
expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
<circle cx="150" cy="100" r="80" fill="#000" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="#0c0">C 0 N T 1 N U E</text>

</svg>`);
// testing generateSVG function with Jest