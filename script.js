// create a function fetchData
function fetchData(){
    // Create a new XMLHttpRequest object
    var req = new XMLHttpRequest();
    
    // Set the request URL and method
    req.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad");
    
    // Define what to do when the request is successful
    req.onload = function() {
      // Parse the response as JSON
      var response = JSON.parse(req.responseText);
    
      // Get the elements by class name or id
      var btc = document.getElementById("bitcoin");
      var eth = document.getElementById("ethereum");
      var sol = document.getElementById("solana");
      var doge = document.getElementById("dogecoin");
      var usdt = document.getElementById("tether");
      
     // Update the HTML elements with cryptocurrency prices
      btc.innerHTML = parseFloat(response.bitcoin.usd).toFixed(2);
      eth.innerHTML = parseFloat(response.ethereum.usd).toFixed(2);
      sol.innerHTML = parseFloat(response.solana.usd).toFixed(2);
      doge.innerHTML = parseFloat(response.dogecoin.usd).toFixed(2);
      usdt.innerHTML = parseFloat(response.tether.usd).toFixed(2);
     
    };
    
    // Send the request
    req.send();
    }
    
    // call the function immediately
    fetchData();
    // Set an interval to call the fetchData function every 1 minute (60,000 milliseconds)
    setInterval(fetchData,60000);
    
    // select all elements with the class fa and fa-star-o 
    const starElements = document.querySelectorAll(".fa.fa-star-o");
    
    // iterate through each star element 
    starElements.forEach(function(starElement){
      // check if the star element has the class check-star
      starElement.addEventListener("click",function(){
        if(starElement.classList.contains("check-star")) {
          //if it does, remove the check-star class
          starElement.classList.remove("check-star");
        }else{
          // if it doesn't , add the check-star class
          starElement.classList.add("check-star");
        }
      });
    });
    
    // get all elements with the class 'button-container'
    var buttonContainer = document.querySelectorAll(".button-container");
    
    //add mouseover and mouseout event to toggle buttons visiblity for each row
    buttonContainer.forEach(function(container){
      container.addEventListener("mouseover",function(){ 
        // Toggle buttons visibility to 'visible' on mouseover
        toggleButtonVisibility(container,'visible');
      });
    
      container.addEventListener("mouseout",function(){
      // Toggle buttons visibility to 'hidden' on mouseout
        toggleButtonVisibility(container,'hidden'); 
      });
    });
    
    // function to toggle buttons visibility 
    function toggleButtonVisibility(container, visibility ){
      // Get all buttons within the container
      var buttons = container.querySelectorAll('button');
      buttons.forEach(function(button){
        button.style.visibility  = visibility ;
      });
    }

    // Function to get the date of the previous day
    function getLastDate(){
      //get the current date
      var currentDate = new Date();
    
      //calculate the previous day
      var previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getDate() - 1);
    
      const day = previousDate.getDate().toString().padStart(2, '0');
      const month = (previousDate.getMonth() + 1).toString().padStart(2, '0');
      const year = previousDate.getFullYear();
    
      //console.log(`${day}-${month}-${year}`);
      return `${day}-${month}-${year}`
    }
    
    function getCurrentDate(){
      //get the current date
      var currentDate = new Date();
    
      const day = currentDate.getDate().toString().padStart(2, '0');
      const month = currentDate.getMonth().toString().padStart(2, '0');
      const year = currentDate.getFullYear();
    
      //console.log(`${day}-${month}-${year}`);
      return `${day}-${month}-${year}`
    }
    
    // Call the fetchBitcoin function
    function fetchBitcoin(){
      var currentDate = getCurrentDate();
      // Create a new XMLHttpRequest object
      var req = new XMLHttpRequest();
      
      // Set the request URL and method
      req.open("GET", "https://api.coingecko.com/api/v3/coins/bitcoin/history?date="+currentDate);
      
      // Define what to do when the request is successful
      req.onload = function() {
        // Parse the response as JSON
        var response = JSON.parse(req.responseText);
      
        // Get the element id
        var bitcoinmc = document.getElementById("bitcoin-market-cap"); 
        bitcoinmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
        console.log(response); 
      };
      
      // Send the request
      req.send();
      }
      
      fetchBitcoin();

      // Call the fetchEthereum function
      function fetchEthereum(){
    
        var currentDate = getCurrentDate();
        // Create a new XMLHttpRequest object
        var req = new XMLHttpRequest();
        
        // Set the request URL and method
        req.open("GET", "https://api.coingecko.com/api/v3/coins/ethereum/history?date="+currentDate);
        
        // Define what to do when the request is successful
        req.onload = function() {
          // Parse the response as JSON
          var response = JSON.parse(req.responseText);
        
          // Get the element id
          var ethereummc = document.getElementById("ethereum-market-cap");
          ethereummc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
          console.log(response);
         
        };
        // Send the request
        req.send();
        }
        
        fetchEthereum();
    
    
        // Call the fetchSolana function
        function fetchSolana(){
    
          var currentDate = getCurrentDate();
          // Create a new XMLHttpRequest object
          var req = new XMLHttpRequest();
          
          // Set the request URL and method
          req.open("GET", "https://api.coingecko.com/api/v3/coins/solana/history?date="+currentDate);
          
          // Define what to do when the request is successful
          req.onload = function() {
            // Parse the response as JSON
            var response = JSON.parse(req.responseText);
          
            // Get the element id
            var solanamc = document.getElementById("solana-market-cap");
            solanamc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
            console.log(response);
          };
          // Send the request
          req.send();
          }
          
          fetchSolana();
  
          // Call the fetchDogecoin function
          function fetchDogecoin(){
    
            var currentDate = getCurrentDate();
            // Create a new XMLHttpRequest object
            var req = new XMLHttpRequest();
            
            // Set the request URL and method
            req.open("GET", "https://api.coingecko.com/api/v3/coins/dogecoin/history?date="+currentDate);
            
            // Define what to do when the request is successful
            req.onload = function() {
              // Parse the response as JSON
              var response = JSON.parse(req.responseText);
            
              // Get the element id
              var dogecoinmc = document.getElementById("dogecoin-market-cap");
              dogecoinmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
              console.log(response);
             
            };
            // Send the request
            req.send();
            }
            
            fetchDogecoin();
  
            // Call the fetchTether function
            function fetchTether(){
    
              var currentDate = getCurrentDate();
              // Create a new XMLHttpRequest object
              var req = new XMLHttpRequest();
              
              // Set the request URL and method
              req.open("GET", "https://api.coingecko.com/api/v3/coins/tether/history?date="+currentDate);
              
              // Define what to do when the request is successful
              req.onload = function() {
                // Parse the response as JSON
                var response = JSON.parse(req.responseText);
              
                // Get the element id
                var tethermc = document.getElementById("tether-market-cap");
                tethermc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
                console.log(response);
               
              };
              // Send the request
              req.send();
              }
              
              fetchTether();
    
    