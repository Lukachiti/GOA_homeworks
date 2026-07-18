//express არის ბექენდის მოდული რომელიც გვიმარტივებს სერვერის შექმნას და ფრონტენდთან კომუნიკაციას
//ბიბლიოთეკა არის სხვის მიერ დაწერილი კოდი რომელიც გვაძლევს ფუნქციონალობას, რომელსაც ჩვენ არ გვიწერია
//framework არის იგივე მაგრამ ამ შემთხვევაში გვაძლევს სტრუქტურას, რომელიც გვიბიძგებს როგორ უნდა დავწეროთ ჩვენი კოდი
const express = require("express");
const PORT = 3000;
const app = express();
let homeworkList = [];


app.use(express.json());
app.post("/homework", (req, res) => {
  
  const { name, subject, dueDate } = req.body; 

    
    if (!name || !subject || !dueDate) {    

    
    return res.status(400).json({ error: "Please provide all required fields" });
  }

    
    const newHomework = {
    name,
    subject,
    dueDate,
  };
  homeworkList.push(newHomework);
  res.status(201).json(newHomework);

});

//სერვერის გაშვება
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});