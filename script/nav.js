

// adding content with head tag
const h=document.getElementsByTagName("head")[0];
    h.innerHTML+=`<link rel="shortcut icon" href="./assets/aviyati.ico" type="image/x-icon">
    
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/index.css">
  <link rel="stylesheet" href="./css/nav2.css"> 
  <link rel="stylesheet" href="./css/menuButton.css">
    <meta property="og:title" content="Aviyati Textile Website">
  <meta property="og:description" content="Explore premium textile collections at Aviyati.">
  <meta property="og:image" content="https://surajitmaji.github.io/assets/aviyati-icon.png">
  <meta property="og:url" content="https://surajitmaji.github.io/">
  <meta property="og:type" content="aviyati">
    `;

//adding content with tittle tag

const titl=document.getElementsByTagName("title")[0];
titl.innerHTML+=` - Aviyati`;

const nav=document.getElementById("header");
nav.innerHTML=`

        <nav class="navbar">
        <div class="menu-button" id="menu-btn" onclick="navOption()">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
        </div>
        <div class="navbar-brand">
            <img src="./assets/aviyati.png" class="websiteLogo">
            Aviyati&nbsp;Looms
        </div>
        <!-- <input type="text" class="search-bar" placeholder="Search...">
        <input type="submit" class="search" value="search"> -->
        <div class="navbar-menu" id="navBarMenu">
            <ul>
                <li><a href="index.html" class="navOption">Home</a></li>
                <li><a href="category.html" class="navOption">Category</a></li>
                <li><a href="collection.html" class="navOption">Collection</a></li>
                <li><a href="kurtaCreatecode.html" class="navOption">Design&nbsp;Studio</a></li>
                <li><a href="aboutUs.html" class="navOption">Testimonial</a></li>
                <!-- <li><a href="signUp.html" class="navButton">Sign&nbsp;Up</a></li>
                <li><a href="login.html" class="navButton">Login</a></li>
                -->
            </ul>
            
        </div>
        </nav>
`;

const footer=document.getElementById('footer');
footer.innerHTML=`
    <p>&copy; 2025 SELF TEXTILES | Designed for Business Excellence</p>
    <div class="footer-conent">
      <a href="#" target="_blank" class="footer-link">Company Info</a>
      <a href="#" target="_blank" class="footer-link">Terms & Polices</a>
      <a href="#" target="_blank" class="footer-link">Career</a>
      <a href="#" target="_blank" class="footer-link">Certificates</a>
    </div>
`;