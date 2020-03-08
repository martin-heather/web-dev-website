function resize() {
  let toc = document.getElementById('toc');
  if (window.innerWidth > 768) {
    toc.style.display = 'block';
  } else {
    toc.style.display = 'none';
  }
}

window.onresize = resize;

function toggleMenu() {
  let toc = document.getElementById('toc');
  if (toc.style.display === 'none') {
    toc.style.display = 'block';
  } else if (window.innerWidth > 768) {
    toc.style.display = 'block';
  } else {
    toc.style.display = 'none';
  }
}

function freelance() {
  document.getElementById('freelance').innerHTML =
    '<p>I’ve copyedited hundreds of books as well as countless ads and marketing documents. I\'ve also proofread books and scholarly articles and provided other editorial services like fact-checking and multimedia quality control. I meet deadlines and client expectations without fail.</p><br><center><img class="small-logo" src="./resources/img/modus.png" alt="Groupe Modus logo"><img class="small-logo" src="./resources/img/harpercollins.png" alt="HarperCollins logo"><img class="small-logo" src="./resources/img/harlequin.jpg" alt="Harlequin logo"><img class="small-logo" src="./resources/img/nelson.png" alt="Nelson logo"></center>';
}

function inHouse() {
  document.getElementById('inHouse').innerHTML =
    '<p>I\'ve worked in-house at two of Canada’s largest publishers. At Nelson Education, I helped create a wide variety of print and digital educational resources, and at Harlequin Books, I proofread and copyedited trade fiction and nonfiction books.</p><center><br><img class="small-logo" src="./resources/img/nelson.png" alt="Nelson logo"><img class="small-logo" src="./resources/img/harlequin.jpg" alt="Harlequin logo"></center>';
}

function concordia() {
  document.getElementById('concordia').innerHTML =
    '<img src="./resources/img/concordia.png" alt="Concordia University logo"><p><span>Concordia University</span></p>Since 2016, I have been studying French grammar, literature and composition part-time in the French Studies department and have a cumulative GPA of 4.0.';
}

function ryerson() {
  document.getElementById('ryerson').innerHTML =
    '<img src="./resources/img/ryerson.png" alt="Ryerson University logo"><p><span>Ryerson University</span></p>At Ryerson, I studied editing, digital publishing and book design among other topics. I was twice nominated for the Rosemary Shipton Award for Excellence in Book Editing.';
}

function uvic() {
  document.getElementById('uvic').innerHTML =
    '<img src="./resources/img/uvic.png" alt="University of Victoria log"><p><span>University of Victoria</span></p>While attending UVic, I also worked for International Student Services, where I taught ESL students in the university\'s Faculty of Business.';
}

function guelph() {
  document.getElementById('guelph').innerHTML =
    '<img src="./resources/img/guelph.png" alt="University of Guelph logo"><p><span>University of Guelph</span></p>While at UofG, I taught English usage and style at the university\'s Learning and Writing Centre as a student writing consultant.';
}
