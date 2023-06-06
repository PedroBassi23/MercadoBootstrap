
      // Para pegar o texto digitado, e direcionar para acontecer o evento

      function showSuggestions(keyword) {
        const suggestions = [
          "pneus",
          "óleos",
          "baterias",
          "multimídias",
          "faróis",
          "lanternas",
          "palhetas",
          "defletores",
          "para-brisas",
          "engates",
          "aromatizantes",
          "retrovisores",
          "lona marítma",
          "alinhamento",
          "para-choques",
          "borrachas",
          "calotas",
          "tapetes",
          "extintores",
          "produtos"
        ];
    
        const suggestionsList = document.getElementById("suggestionsList");
        suggestionsList.innerHTML = "";
    
        if (keyword.trim() !== "") {
          suggestions.forEach(function (suggestion) {
            if (suggestion.toLowerCase().includes(keyword.toLowerCase())) {
              const li = document.createElement("li");
              const link = document.createElement("a");
              link.href = "index.html#" + suggestion;
              link.textContent = suggestion;
              li.appendChild(link);
              suggestionsList.appendChild(li);
            }
          });
        }
      }
      function showServices() {
        const servicesCard = document.getElementById("servicesCard");
        servicesCard.style.display = "block";
        servicesCard.classList.add("show");
      }
      
      function hideServices() {
        const servicesCard = document.getElementById("servicesCard");
        const isHovered = isMouseOver(servicesCard);
        if (!isHovered) {
          servicesCard.style.display = "none";
          servicesCard.classList.remove("show");
        }
      }
      
      function isMouseOver(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
      }
      
      function redirectToSearch(event) {
        event.preventDefault();
        // Lógica para redirecionar para a página de pesquisa
      }
      
      
      
      
      
      
      
    
      document.addEventListener("click", function (event) {
        const searchInput = document.getElementById("searchInput");
        const suggestionsList = document.getElementById("suggestionsList");
        
        if (!event.target.closest(".search-bar")) {
          suggestionsList.innerHTML = "";
          searchInput.value = "";
        }
      });
    
    
    
    
      function handleKeyPress(event) {
      const suggestionsList = document.getElementById("suggestionsList");
      const suggestions = suggestionsList.querySelectorAll("li");
    
      if (event.key === "ArrowDown") {
        event.preventDefault();
    
        let selectedSuggestionIndex = -1;
        for (let i = 0; i < suggestions.length; i++) {
          if (suggestions[i].classList.contains("selected")) {
            selectedSuggestionIndex = i;
            break;
          }
        }
    
        if (selectedSuggestionIndex < suggestions.length - 1) {
          if (selectedSuggestionIndex > -1) {
            suggestions[selectedSuggestionIndex].classList.remove("selected");
          }
    
          selectedSuggestionIndex++;
          suggestions[selectedSuggestionIndex].classList.add("selected");
        }
      } else if (event.key === "Enter") {
        event.preventDefault();
    
        const selectedSuggestion = suggestionsList.querySelector(".selected");
        if (selectedSuggestion) {
          const link = selectedSuggestion.querySelector("a");
          const keyword = link.textContent;
          const searchInput = document.getElementById("searchInput");
          searchInput.value = keyword;
          redirectToSearch(event);
        }
      }
    }
    
    
  //  document.addEventListener("click", function (event) {
  //  const selectedSuggestion = event.target.closest("li");
  //  if (selectedSuggestion) {
  //      const link = selectedSuggestion.querySelector("a");
  //      const keyword = link.textContent;
  //      const searchInput = document.getElementById("searchInput");
  //      searchInput.value = keyword;
  //      redirectToSearch(event);
  //    }
  //  });
    
    
    
    function redirectToSearch(event) {
      event.preventDefault();
      const searchInput = document.getElementById("searchInput");
      const keyword = searchInput.value;
      window.location.href = "index.html#" + keyword;
    
      // Limpar a barra de pesquisa
      searchInput.value = "";
    
      // Ocultar a lista de sugestões
      const suggestionsList = document.getElementById("suggestionsList");
      suggestionsList.innerHTML = "";
    }
    
    document.addEventListener("click", function (event) {
      const searchInput = document.getElementById("searchInput");
      const suggestionsList = document.getElementById("suggestionsList");
    
      if (!event.target.closest(".search-bar")) {
        suggestionsList.innerHTML = "";
        searchInput.value = "";
      }
    });
    
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const suggestionsList = document.getElementById("suggestionsList");
        suggestionsList.innerHTML = "";
      }
    });
    
    
    
    
      // Função para atualizar o valor da variável windowWidth
 